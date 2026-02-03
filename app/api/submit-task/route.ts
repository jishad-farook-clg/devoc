import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, day, date, topic, youtubeLink, declaration } = body;

    if (!name || !email || !phone || !day || !youtubeLink || !declaration) {
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
      range: "tasks!A:H",
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          name,
          email,
          phone,
          day,
          date,
          topic,
          youtubeLink,
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