import { NextResponse } from "next/server";

export async function GET() {
  try {
    let responseTime = new Date().getTime();
    const responseHead = await fetch("https://sup-algorithm1.netlify.app/", {
      method: "GET",
    });
    responseTime = new Date().getTime() - responseTime;
    console.log("responseHead", responseHead);
    const status = responseHead.status;
    return NextResponse.json({
      status: status,
      message: responseHead.statusText,
      responseTime: responseTime,
    });
  } catch (err) {
    return NextResponse.json({ status: 500, message: "Server action Failed" });
  }
}
