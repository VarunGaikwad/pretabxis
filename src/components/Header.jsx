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
    <header className="flex justify-between p-2">
      <div className="grid grid-cols-5 gap-2">
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
