import React, { useState, useEffect } from "react";
import ItemPreviewPopUp from "./ItemPreviewPopUp";

const JourneyStopItem = ({
  paintingId,
  exhibitionId,
  journeyIndex,
  currentStop,
}) => {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClick = () => {
    setIsPreviewing(true);
    setIsFadingOut(false);

    setTimeout(() => {
      setIsFadingOut(true);
    }, 1000);
  };

  useEffect(() => {
    if (isFadingOut) {
      const timeout = setTimeout(() => {
        setIsPreviewing(false);
        setIsFadingOut(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isFadingOut]);

  const stopIndicatorStyle = `stop-indicator ${
    currentStop === journeyIndex
      ? `current`
      : currentStop > journeyIndex
      ? `previous`
      : ``
  }`;

  return (
    <div className="journey-stop-item">
      <div className={stopIndicatorStyle} onClick={handleClick}></div>
      {isPreviewing && <ItemPreviewPopUp isFadingOut={isFadingOut} />}
      <b>JourneyStopItem, name: </b>
      <p>
        index: {journeyIndex}, ID: {paintingId}, exhibition: {exhibitionId}
      </p>
    </div>
  );
};

export default JourneyStopItem;
