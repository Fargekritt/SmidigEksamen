import React, { useState, useEffect } from "react";

const CurrentStopSection = ({ paintingId }) => {
  /* Mising:
  - Get painting info from api
  - Return name, image */

  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPaintingId, setCurrentPaintingId] = useState(paintingId);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
      setCurrentPaintingId(paintingId);
    }, 500);

    return () => clearTimeout(timeout);
  }, [paintingId]);

  return (
    <div className="current-stop-section">
      <img src="" alt="" />
      <div>
        <small>Currently viewing:</small>
        <div className={`current-stop-name-container `}>
          <p
            className={`current-stop-name ${
              isAnimating ? "slide-left-exit" : ""
            }`}
          >
            {currentPaintingId} (name)
          </p>
          <p
            className={`current-stop-name next ${
              isAnimating ? "slide-left-enter" : ""
            }`}
          >
            {paintingId} (name)
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentStopSection;
