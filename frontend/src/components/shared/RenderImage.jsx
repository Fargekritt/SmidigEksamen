import React from "react";

const RenderImage = ({ image, altText }) => {
  return (
    <div className="image-wrapper">
      <img
        src={image || "./images/fallback-image.svg"}
        alt={altText}
        onError={({ currentTarget }) => {
          console.log("error");
          currentTarget.onerror = null;
          currentTarget.src = "./images/fallback-image.svg";
        }}
      />
    </div>
  );
};

export default RenderImage;
