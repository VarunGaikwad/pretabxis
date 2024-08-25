import { useEffect, useState } from "react";

export default function PercentageClock() {
  const [, setRender] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRender((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-9xl font-bold">
      {_GetTimePercentage()}
      <span className="mx-2 text-7xl">%</span>
    </div>
  );
}

function _GetTimePercentage() {
  const [startTime, endTime, now] = Array(3)
    .fill(0)
    .map(() => new Date());

  startTime.setHours(9, 30, 0, 0);
  endTime.setHours(18, 30, 0, 0);
  now.setHours(now.getHours(), now.getMinutes(), 0, 0);

  const totalTime = endTime - startTime,
    elapsedTime = now - startTime,
    percentage = (elapsedTime / totalTime) * 100;

  return Math.floor(-percentage + 100);
}
