import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import GlobalModel from "../common/GlobalModel";

BackgroundControl.propTypes = {
  children: PropTypes.node,
};

export default function BackgroundControl({ children }) {
  const [imageUrl, setImageUrl] = useState(""),
    { globalModel } = useContext(GlobalModel),
    { raw, small_s3 } = globalModel?.unsplash?.urls || {
      raw: "",
      small_s3: "",
    };

  useEffect(() => {
    setImageUrl(small_s3);
    const img = new Image();
    img.src = raw;
    img.onload = () => {
      setImageUrl(raw);
    };
  }, [raw, small_s3]);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${imageUrl})`,
        opacity: imageUrl === raw ? 1 : 0.5,
      }}
    >
      <div className="h-screen w-screen flex flex-col bg-black bg-opacity-50">
        {children}
      </div>
    </div>
  );
}
