import { google } from "googleapis";
import { NextResponse } from "next/server";
import { verifyRecaptcha } from "@/lib/server/verify-recaptcha";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, college, department, recaptchaToken} = body;

    if (!name || !email || !phone || !college || !department || !recaptchaToken) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const recaptcha = await verifyRecaptcha(recaptchaToken);

    if (!recaptcha.success) {
      return NextResponse.json(
        { error: "Invalid reCAPTCHA token" },
        { status: 403 }
      );
    }

    if (recaptcha.action !== "register_form") {
      return NextResponse.json(
        { error: "Invalid reCAPTCHA action" },
        { status: 403 }
      );
    }

    const threshold = Number(process.env.RECAPTCHA_MIN_SCORE) || 0.5;
    if (recaptcha.score < threshold) {
      console.warn(`reCAPTCHA score too low: ${recaptcha.score}`);
      return NextResponse.json(
        { error: "Suspected bot activity" },
        { status: 403 }
      );
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    await auth.authorize();

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "register!A1:A",
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          name,
          email,
          phone,
          college,
          department,
          timestamp,
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { error: "Failed to submit registration" },
      { status: 500 }
    );
  }
}
