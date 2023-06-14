import React, {useState} from "react";
//Lager et Image DOM elementm usikker på om det kan brukes?
function FocalPoint(imageUrl) {
  const [focalPoint, setFocalPoint] = useState({x: 0, y: 0});
  // Create a new Image object
  let img = new Image();

  // Once the image has loaded, calculate the focal point
  img.onload = function () {
    const aspectRatio = this.width / this.height;
    let focalX, focalY;

    if (aspectRatio > 1) {
      // The image is landscape
      focalX = this.width / 2;  // set the focal point to the center of the image
      focalY = this.height / 2;
    } else {
      // The image is portrait
      focalX = this.width / 2;
      focalY = this.height / 3;  // set the focal point a third of the way down the image
    }
    img.x = focalX;
    img.y = focalY;
    setFocalPoint({x: focalX, y: focalY});
  }

  // Start loading the image
  img.src = imageUrl;
  img.toString()
}

const RenderImage = ({image, altText}) => {
  return (
    <div className="image-wrapper">
      <p className={"portrait"}>Kakemann</p>
      <img
        src={image || "./images/fallback-image.svg"}
        alt={altText}
        onLoad={(currentTarget) => {

          const aspectRatio = currentTarget.currentTarget.naturalWidth / currentTarget.currentTarget.naturalHeight;
          console.log("Aspect ratio: " + aspectRatio);
          console.log(currentTarget.currentTarget.alt)
          if (aspectRatio > 1) {//landscape
            console.log("setting style to: landscape")
            currentTarget.currentTarget.className = "landscape"
          } else {
            console.log("setting style to: portrait")
            currentTarget.currentTarget.className = "portrait"
          }
        }}
        onError={({currentTarget}) => {
          console.log("error");
          currentTarget.onerror = null;
          currentTarget.src = "./images/fallback-image.svg";
        }}
      />
    </div>
  );
};


export default RenderImage;
