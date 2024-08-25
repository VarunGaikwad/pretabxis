import { useMemo, useState } from "react";
import words from "../common/Words.json";
export default function WordOfDay() {
  const { word, meaning, pronunciation } = useMemo(
      () => words[Math.floor(Math.random() * words.length)],
      []
    ),
    [isPronunciationHover, setPronunciationHover] = useState(false);
  return (
    <div className="flex flex-col gap-2 text-center font-semibold select-none">
      <span
        onClick={() => setPronunciationHover(true)}
        onMouseLeave={() => setPronunciationHover(false)}
        className="text-7xl cursor-pointer"
      >
        {word}
      </span>
      <span
        className={`text-2xl transition-all duration-1000  ${
          isPronunciationHover ? "opacity-100" : "opacity-0"
        }`}
      >
        {pronunciation}
      </span>
      <span className="text-2xl">{meaning}</span>
    </div>
  );
}
