import { saveLog } from "@/util/network";

const Heartbeat = async () => {
  const heartbeat = await getHeartbeat();

  console.log("heartbeat", heartbeat);
  if (heartbeat?.status === 500) {
  } else {
    saveLog({
      time: new Date().toISOString(),
      responseTime: 0,
      mailSent: true,
    });
  }
  return null;
  // return <div>{heartbeat?.text()}</div>;
};
export default Heartbeat;

const getHeartbeat = async () => {
  console.log("getHeartbeta");
  const data = await fetch("http://localhost:3002/api/heartbeat", {
    cache: "no-cache",
  });
  const response = await data.json();
  return response;
};
