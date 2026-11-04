
import { NextRequest, NextResponse } from "next/server";
import { createCipheriv, randomBytes } from "crypto";
import { supabaseAdmin } from "../../../../lib/supabaseAdmin";

function encryptToken(token: string): string {
  const keyHex = process.env.LINKEDIN_TOKEN_ENCRYPTION_KEY;

  if (!keyHex || !/^[0-9a-fA-F]{64}$/.test(keyHex)) {
    throw new Error("Invalid token encryption key");
  }

  const key = Buffer.from(keyHex, "hex");
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key, iv);

  const encrypted = Buffer.concat([
    cipher.update(token, "utf8"),
    cipher.final(),
  ]);

  const authTag = cipher.getAuthTag();

  return [
    iv.toString("hex"),
    authTag.toString("hex"),
    encrypted.toString("hex"),
  ].join(":");
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");
  const returnedState = searchParams.get("state");
  const oauthError = searchParams.get("error");

  const savedState =
    request.cookies.get("linkedin_oauth_state")?.value;

  const fail = (message: string, status = 400) => {
    const response = NextResponse.json(
      { error: message },
      { status }
    );

    response.cookies.delete("linkedin_oauth_state");
    return response;
  };

  if (oauthError) {
    return fail("LinkedIn authorization was cancelled or denied.");
  }

  if (
    !code ||
    !returnedState ||
    !savedState ||
    returnedState !== savedState
  ) {
    return fail("LinkedIn authorization could not be verified.");
  }

  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return fail("LinkedIn environment variables are missing.", 500);
  }

  try {
    // Exchange authorization code for an access token.
    const tokenResponse = await fetch(
      "https://www.linkedin.com/oauth/v2/accessToken",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: redirectUri,
          client_id: clientId,
          client_secret: clientSecret,
        }),
        cache: "no-store",
      }
    );

    const tokenData = await tokenResponse.json();

    if (
      !tokenResponse.ok ||
      typeof tokenData.access_token !== "string" ||
      typeof tokenData.expires_in !== "number"
    ) {
      console.error(
        "LinkedIn token exchange failed:",
        tokenData.error || tokenResponse.status
      );

      return fail("LinkedIn token exchange failed.", 502);
    }

    // Retrieve the authorized LinkedIn member profile.
    const profileResponse = await fetch(
      "https://api.linkedin.com/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
        cache: "no-store",
      }
    );

    const profile = await profileResponse.json();

    if (!profileResponse.ok || !profile.sub) {
      console.error(
        "LinkedIn profile request failed:",
        profileResponse.status
      );

      return fail("Could not retrieve your LinkedIn profile.", 502);
    }

    const personUrn = `urn:li:person:${profile.sub}`;

    const expiresAt = new Date(
      Date.now() + tokenData.expires_in * 1000
    ).toISOString();

    // Save the encrypted token in Supabase.
    const { error } = await supabaseAdmin
      .from("linkedin_connections")
      .upsert(
        {
          id: "00000000-0000-4000-8000-000000000001",
          person_urn: personUrn,
          access_token_encrypted: encryptToken(
            tokenData.access_token
          ),
          expires_at: expiresAt,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "id" }
      );

    if (error) {
      console.error("Supabase save failed:", error.message);

      return fail(
        "Could not save your LinkedIn connection.",
        500
      );
    }

    // Redirect after successful connection.
    const response = NextResponse.redirect(
      new URL("/?linkedin=connected", request.url)
    );

    response.cookies.delete("linkedin_oauth_state");

    return response;
  } catch (error) {
    console.error("LinkedIn callback error:", error);

    return fail(
      "An unexpected error occurred during LinkedIn connection.",
      500
    );
  }
}
