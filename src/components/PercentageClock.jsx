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

function _GetTimePercentage(
  [startHour, startMin, endHour, endMin] = [9, 30, 18, 30],
  currentDate = new Date()
) {
  const [
      startHourInSeconds,
      startMinutesInSeconds,
      endHourInSeconds,
      endMinutesInSeconds,
      currentHourInSeconds,
      currentMinutesInSeconds,
    ] = [
      startHour * 3600,
      startMin * 60,
      endHour * 3600,
      endMin * 60,
      currentDate.getHours() * 3600,
      currentDate.getMinutes() * 60,
    ],
    totalSeconds =
      endHourInSeconds +
      endMinutesInSeconds -
      (startHourInSeconds + startMinutesInSeconds),
    secondsSinceStart =
      currentHourInSeconds +
      currentMinutesInSeconds -
      (startHourInSeconds + startMinutesInSeconds),
    progress = (secondsSinceStart / totalSeconds) * 100,
    result = Math.floor(progress);

  return result > 100 ? `+${result - 100}` : result;
}
