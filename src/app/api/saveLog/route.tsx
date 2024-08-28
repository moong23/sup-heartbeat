import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

const logFilePath = path.join(process.cwd(), "/logs", "logs.txt");

export async function POST(req: Request) {
  const { time, responseTime, mailSent } = await req.json();
  const logEntry = `${time},${responseTime},${mailSent}\n`;
  try {
    fs.appendFile(logFilePath, logEntry, (err) => {
      if (err) {
        console.log("Error writing log:", err);
        throw err;
      }
    });
  } catch (err: any) {
    return NextResponse.json({
      message: "Failed to save log" + err.message,
    });
  }
  return NextResponse.json({
    message: "WIP",
  });
}
