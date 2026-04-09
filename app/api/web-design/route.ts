import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, day, codepenLink, message } = body;

    // 'message' is optional, so we only validate the core fields
    if (!name || !phone || !day || !codepenLink) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    await auth.authorize();

    const sheets = google.sheets({ version: "v4", auth });

    const submissionTimestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "web-design!A1:A", 
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          name,
          phone,
          day,
          codepenLink,
          message || "",
          submissionTimestamp,
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Task Submission Error:", error);
    return NextResponse.json(
      { error: "Failed to submit task" },
      { status: 500 }
    );
  }
}