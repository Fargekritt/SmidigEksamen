import React from "react";

const RenderImage = ({ image, altText }) => {
  return (
    <div className="image-wrapper">
      <img
        src={image || "./images/fallback-image.svg"}
        alt={altText}
        onLoad={currentTarget => {
          const aspectRatio =
            currentTarget.currentTarget.naturalWidth /
            currentTarget.currentTarget.naturalHeight;

          if (aspectRatio > 1.1) {
            currentTarget.currentTarget.parentElement.className =
              "image-wrapper";
          } else {
            currentTarget.currentTarget.parentElement.className =
              "image-wrapper portrait";
          }
        }}
        onError={({ currentTarget }) => {
          console.log("error");
        }}
      />
    </div>
  );
};

export default RenderImage;
