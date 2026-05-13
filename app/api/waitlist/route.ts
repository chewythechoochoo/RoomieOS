import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { email?: unknown; hp?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid body" }, { status: 400 });
  }

  // Honeypot: a hidden form field that humans never fill in. If it has any
  // value, the submission almost certainly came from a bot, so we silently
  // pretend to accept it.
  if (typeof body.hp === "string" && body.hp.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    console.error("[waitlist] missing RESEND_API_KEY or RESEND_AUDIENCE_ID");
    return NextResponse.json({ error: "server not configured" }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.contacts.create({ email, audienceId });

    if (result.error) {
      const msg = String(result.error.message ?? "").toLowerCase();
      // Treat duplicate signups as success — no reason to leak that the email
      // is already on the list.
      if (msg.includes("already")) {
        return NextResponse.json({ ok: true });
      }
      console.error("[waitlist] resend error:", result.error);
      return NextResponse.json({ error: "failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[waitlist] unexpected error:", e);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
