import PropTypes from "prop-types";
FavIcon.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default function FavIcon({ title, url }) {
  return (
    <a
      href={url}
      className="flex flex-col h-fit w-16 items-center bg-black rounded-xl p-2 bg-opacity-45 scale-95 cursor-pointer hover:bg-opacity-75 hover:scale-110 transition-all duration-500"
    >
      <img
        className="size-10"
        src="https://cdn-icons-png.flaticon.com/256/720/720255.png"
      />
      <span className="mt-2 truncate">{title}</span>
    </a>
  );
}
