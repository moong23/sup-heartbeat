export interface logData {
  time: string;
  responseTime: number;
  mailSent: boolean;
}

export const saveLog = async (logData: logData) => {
  const hostName = "http://localhost:3002";
  const response = await fetch(`${hostName}/api/saveLog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(logData),
  });
  const data = await response.json();
  console.log(data);
};

export const getLogs = async () => {
  const response = await fetch("http://localhost:3002/api/getLogs");

  if (!response.ok) {
    console.error("Failed to get logs");
    return [];
  }

  const data = await response.json();
  return data.logs;
};
