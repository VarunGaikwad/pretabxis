import { useContext } from "react";
import GlobalModel from "../common/GlobalModel";

export default function Greeting() {
  const { globalModel } = useContext(GlobalModel);
  return (
    <div className="text-5xl font-semibold">
      {GetGreetingInJapanese()} {globalModel?.displayName}
    </div>
  );
}

function GetGreetingInJapanese() {
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();
  let greeting;

  const lunchStartHour = 13;
  const lunchEndHour = 13;
  const lunchStartMinute = 0;
  const lunchEndMinute = 30;

  const snackStartHour = 17;
  const snackEndHour = 17;
  const snackStartMinute = 0;
  const snackEndMinute = 30;

  if (
    (currentHour === lunchStartHour && currentMinute >= lunchStartMinute) ||
    (currentHour === lunchEndHour && currentMinute <= lunchEndMinute) ||
    (currentHour > lunchStartHour && currentHour < lunchEndHour)
  ) {
    greeting = "ランチタイムです！🍱";
  } else if (
    (currentHour === snackStartHour && currentMinute >= snackStartMinute) ||
    (currentHour === snackEndHour && currentMinute <= snackEndMinute) ||
    (currentHour > snackStartHour && currentHour < snackEndHour)
  ) {
    greeting = "おやつタイムです！🍪";
  } else if (currentHour < 12) {
    greeting = "おはようございます！🌅";
  } else if (currentHour < 18) {
    greeting = "こんにちは！🌞";
  } else {
    greeting = "こんばんは！🌙";
  }

  return greeting;
}
