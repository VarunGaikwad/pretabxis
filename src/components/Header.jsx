import AddFavLink from "./AddFavLink";
import FavIcon from "./FavIcon";
import GlobalModel from "../common/GlobalModel";
import { useContext } from "react";
import Weather from "./Weather";

export default function Header() {
  const {
    globalModel: { favLinks },
  } = useContext(GlobalModel);
  return (
    <header className="flex justify-end p-2">
      <div className="absolute top-5 left-3 grid grid-cols-4 gap-2">
        {favLinks.map((favLink, index) => (
          <FavIcon key={index} url={favLink.url} title={favLink.title} />
        ))}
        {favLinks.length < 15 && <AddFavLink />}
      </div>
      <div>
        <Weather />
      </div>
    </header>
  );
}
