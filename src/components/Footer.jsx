import Credit from "./Credit";
import Quote from "./Quote";

export default function Footer() {
  return (
    <footer className="flex justify-between p-2 text-center">
      <Credit />
      <Quote />
      <div className="w-1/4" />
    </footer>
  );
}
