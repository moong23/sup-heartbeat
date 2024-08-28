import Image from "next/image";
import Heartbeat from "./Heartbeat";

export default function Home() {
  console.log("---------------------------");
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div>test123</div>
      <Heartbeat />
    </main>
  );
}
