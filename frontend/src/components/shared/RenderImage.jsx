import React, { useLayoutEffect, useRef } from "react";

const RenderImage = ({ image, altText }) => {
  const imageRef = useRef();
  useLayoutEffect(() => {
    console.log();
  }, []);

  if (imageRef.current) {
    console.log(
      imageRef.current.alt,
      imageRef.current.naturalHeight,
      imageRef.current.naturalWidth
    );
  }

  return (
    <div className="image-wrapper">
      <img
        ref={imageRef}
        src={image || "./images/fallback-image.svg"}
        alt={altText}
        onError={({ currentTarget }) => {
          console.log("error");
          // currentTarget.onerror = null;
          currentTarget.src = "./images/fallback-image.svg";
        }}
      />
    </div>
  );
};

export default RenderImage;
