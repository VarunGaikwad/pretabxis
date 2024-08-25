import Greeting from "./Greeting";
import PercentageClock from "./PercentageClock";
import WordOfDay from "./WordOfDay";

export default function Main() {
  return (
    <main className="flex-1 flex flex-col gap-4 justify-center items-center">
      <PercentageClock />
      <Greeting />
      <WordOfDay />
    </main>
  );
}
