import React, { useState, useEffect } from "react";
import RenderImage from "../../shared/RenderImage";

const CurrentStopSection = ({
  paintingId,
  paintingName,
  imagePath,
  handleViewPaintingPage,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPaintingName, setCurrentPaintingName] = useState();
  const [painting, setPainting] = useState({ paintingName: "", imagePath: "" });

  useEffect(() => {
    setPainting({ paintingName, imagePath });
    setCurrentPaintingName(paintingName);
  }, [paintingId, paintingName, imagePath]);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
      setCurrentPaintingName(painting?.paintingName);
    }, 500);

    return () => clearTimeout(timeout);
  }, [paintingId]);

  return (
    <div className="current-stop-section" onClick={handleViewPaintingPage}>
      <RenderImage image={painting.imagePath} altText={painting.paintingName} />
      <div className="text-wrapper">
        <small>Du ser på:</small>
        <div className={`current-stop-name-container `}>
          <p
            className={`current-stop-name ${
              isAnimating ? "slide-left-exit" : ""
            }`}
          >
            {painting.paintingName}
          </p>
          <p
            className={`current-stop-name next ${
              isAnimating ? "slide-left-enter" : ""
            }`}
          >
            {currentPaintingName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentStopSection;
