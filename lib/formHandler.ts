import { NextResponse } from "next/server";
import { clientKey, rateLimit } from "./rateLimit";
import { isHoneypotFilled, type ValidationResult } from "./validation";

export async function handleFormSubmission<T>(
  request: Request,
  {
    scope,
    validate,
    send,
    successMessage,
  }: {
    scope: string;
    validate: (input: unknown) => ValidationResult<T>;
    send: (data: T) => Promise<{ success: boolean }>;
    successMessage: string;
  },
) {
  const limit = rateLimit(clientKey(request, scope));
  if (!limit.allowed) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }

  // Bots that fill the hidden field get a normal-looking response.
  if (isHoneypotFilled(body)) {
    return NextResponse.json({ message: successMessage }, { status: 200 });
  }

  const result = validate(body);
  if (!result.ok) {
    return NextResponse.json(
      { message: Object.values(result.errors)[0], errors: result.errors },
      { status: 400 },
    );
  }

  const sent = await send(result.data);
  if (!sent.success) {
    return NextResponse.json(
      { message: "We could not send your request right now. Please call the school office." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: successMessage }, { status: 200 });
}
