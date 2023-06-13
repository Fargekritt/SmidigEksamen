import React, { useState, useEffect } from "react";
import ItemPreviewPopUp from "./ItemPreviewPopUp";
import ApiService from "../../../services/ApiService";

const JourneyStopItem = ({
  paintingId,
  exhibitionId,
  journeyIndex,
  currentStop,
  coordinates,
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
    <div
      className="journey-stop-item journey-map-indicator"
      style={{ left: `${coordinates.x}%`, top: `${coordinates.y}%` }}
    >
      <div className="stop-indicator-wrapper">
        <div className={stopIndicatorStyle} onClick={handleClick}></div>
      </div>
      {isPreviewing && <ItemPreviewPopUp isFadingOut={isFadingOut} />}

      {/* {coordinates && (
        <small>
          index: {journeyIndex}, ID: {paintingId}, exhibition: {exhibitionId}
          coordinates: {coordinates.x}, {coordinates.y}
        </small>
      )} */}
    </div>
  );
};

export default JourneyStopItem;
