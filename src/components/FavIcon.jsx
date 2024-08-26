import PropTypes from "prop-types";
FavIcon.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default function FavIcon({ title, url }) {
  return (
    <a href={url} className="fav-icon">
      <img
        className="size-10"
        src={`https://www.google.com/s2/favicons?domain=${url}&sz=128`}
      />
      <span className="mt-2 truncate">{title}</span>
    </a>
  );
}
