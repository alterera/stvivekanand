import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type?: string;
  slug?: string;
};

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "Revalidation is not configured" }, { status: 500 });
  }

  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(req, secret, true);

    if (!isValidSignature) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }

    if (!body?._type) {
      return NextResponse.json({ message: "Missing _type in payload" }, { status: 400 });
    }

    revalidateTag(body._type, "max");

    return NextResponse.json({ revalidated: body._type, slug: body.slug ?? null });
  } catch (error) {
    console.error("Revalidation webhook failed:", error);
    return NextResponse.json({ message: "Revalidation failed" }, { status: 500 });
  }
}
