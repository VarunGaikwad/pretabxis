import { useEffect, useRef } from "react";
import BackgroundControl from "../components/BackgroundControl";
import CaesarCipher from "../common/CipheringAlgorithm";

export default function UnknownUser() {
  const input = useRef(null);
  useEffect(() => {
    if (input?.current) {
      input.current.focus();
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (input.current.value.length > 3) {
          localStorage.setItem(
            "displayName",
            CaesarCipher(input.current.value, 9)
          );
          window.location.reload();
        }
      }
    });
  }, []);

  return (
    <BackgroundControl>
      <div className="h-screen w-screen text-center grid place-content-center gap-10">
        <span className="text-6xl font-bold">
          Hello, What should I call you?
        </span>
        <input
          ref={input}
          className="border-b-4 rounded-sm outline-none text-6xl text-center font-semibold bg-transparent mt-4"
        />
      </div>
    </BackgroundControl>
  );
}
