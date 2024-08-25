import { useContext } from "react";
import GlobalModel from "../common/GlobalModel";

export default function Quote() {
  const {
    globalModel: { quotes },
  } = useContext(GlobalModel);

  return <q className="flex-1 font-semibold w-2/4">{quotes.content}</q>;
}
