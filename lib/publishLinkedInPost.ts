
import "server-only";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { decryptLinkedInToken } from "@/lib/linkedinToken";

export async function publishLinkedInPost(commentary: string) {
  if (!commentary.trim()) {
    throw new Error("Post content cannot be empty.");
  }

  const { data: connection, error } = await supabaseAdmin
    .from("linkedin_connections")
    .select("person_urn, access_token_encrypted, expires_at")
    .eq("id", "00000000-0000-4000-8000-000000000001")
    .single();

  if (error || !connection) {
    throw new Error("LinkedIn account is not connected.");
  }

  if (new Date(connection.expires_at).getTime() <= Date.now()) {
    throw new Error("LinkedIn access token has expired. Reconnect your account.");
  }

  const accessToken = decryptLinkedInToken(
    connection.access_token_encrypted
  );

  const response = await fetch(
    "https://api.linkedin.com/rest/posts",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "X-Restli-Protocol-Version": "2.0.0",
        "Linkedin-Version": "202610",
      },
      body: JSON.stringify({
        author: connection.person_urn,
        commentary,
        visibility: "PUBLIC",
        distribution: {
          feedDistribution: "MAIN_FEED",
          targetEntities: [],
          thirdPartyDistributionChannels: [],
        },
        lifecycleState: "PUBLISHED",
        isReshareDisabledByAuthor: false,
      }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("LinkedIn publishing failed:", response.status, errorText);
    throw new Error(`LinkedIn publishing failed (${response.status}).`);
  }

  return {
    success: true,
    postId: response.headers.get("x-restli-id"),
  };
}