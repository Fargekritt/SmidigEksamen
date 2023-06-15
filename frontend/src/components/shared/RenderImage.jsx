import React from "react";

const RenderImage = ({ image, altText }) => {
  return (
    <div className="image-wrapper">
      <img
        src={image || "./images/fallback-image.svg"}
        alt={altText}
        onLoad={(currentTarget) => {

          const aspectRatio = currentTarget.currentTarget.naturalWidth / currentTarget.currentTarget.naturalHeight;
          console.log("Aspect ratio: " + aspectRatio);
          console.log(currentTarget.currentTarget.alt)
          if (aspectRatio > 1.1) {//landscape
            console.log("setting style to: landscape")
            currentTarget.currentTarget.parentElement.className = "image-wrapper"
            // currentTarget.currentTarget.className = "landscape"
          } else {
            console.log("setting style to: portrait")
            currentTarget.currentTarget.parentElement.className = "image-wrapper portrait"
            // currentTarget.currentTarget.className = "portrait"
          }
        }}
        onError={({currentTarget}) => {
          console.log("error");
          // currentTarget.onerror = null;
          currentTarget.src = "./images/fallback-image.svg";
        }}
      />
    </div>
  );
};

export default RenderImage;
