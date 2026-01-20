import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Minimal validation
    const { name, email, subject, message } = data;
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing fields" },
        { status: 400 },
      );
    }

    // TODO: integrate with SMTP or third-party provider using env vars
    // For now, log to server console (Netlify/Vercel logs will capture this)
    console.log("[contact] received", { name, email, subject, message });

    return NextResponse.json({ success: true, message: "Message received" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Internal error" },
      { status: 500 },
    );
  }
}
