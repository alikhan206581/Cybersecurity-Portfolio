import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { publishLinkedInPost } from "@/lib/publishLinkedInPost";

function isAuthorized(request: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  const authorization = request.headers.get("authorization");

  if (!secret || !authorization?.startsWith("Bearer ")) {
    return false;
  }

  const provided = Buffer.from(authorization.slice(7));
  const expected = Buffer.from(secret);

  return (
    provided.length === expected.length &&
    timingSafeEqual(provided, expected)
  );
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();

    if (
      typeof body.commentary !== "string" ||
      !body.commentary.trim()
    ) {
      return NextResponse.json(
        { error: "Post content is required." },
        { status: 400 }
      );
    }

    const result = await publishLinkedInPost(body.commentary);

    return NextResponse.json(result);
  } catch (error) {
    console.error("LinkedIn test-post error:", error);

    return NextResponse.json(
      { error: "LinkedIn publishing failed." },
      { status: 500 }
    );
  }
}