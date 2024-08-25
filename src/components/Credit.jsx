import { useContext, useState } from "react";
import GlobalModel from "../common/GlobalModel";

export default function Credit() {
  const [isHover, setHover] = useState(false),
    {
      globalModel: {
        unsplash: {
          user: { name, instagram_username },
        },
      },
    } = useContext(GlobalModel);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-1/4 select-none"
    >
      <div className="flex flex-col w-fit text-center">
        <span
          className={`${
            isHover ? "translate-y-0" : "translate-y-5"
          } transition-all duration-300`}
        >
          {name}
        </span>
        <span
          className={`${
            isHover ? "opacity-100" : "opacity-0"
          } transition-all duration-300`}
        >
          {"@" + instagram_username}
        </span>
      </div>
    </div>
  );
}
