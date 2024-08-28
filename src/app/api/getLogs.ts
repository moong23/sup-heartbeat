import { Request, Response } from "express";
import fs from "fs";
import path from "path";

// 로그 파일 경로 설정
const logFilePath = path.join(process.cwd(), "logs.txt");

export default function handler(req: Request, res: Response) {
  if (req.method === "GET") {
    // 로그 파일 읽기 (비동기 방식)
    fs.readFile(logFilePath, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading log file:", err);
        return res.status(500).json({ message: "Failed to read log file" });
      }

      // 로그 데이터를 클라이언트로 반환
      res.status(200).json({ logs: data.split("\n").filter(Boolean) });
    });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
