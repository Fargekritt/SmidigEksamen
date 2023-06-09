import React, { useState, useEffect } from "react";
import ItemPreviewPopUp from "./ItemPreviewPopUp";
import ApiService from "../../../services/ApiService";

const JourneyStopItem = ({
  paintingId,
  exhibitionId,
  journeyIndex,
  currentStop,
}) => {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // const { image, paintingName } = painting;

  const handleClick = () => {
    setIsPreviewing(true);
    setIsFadingOut(false);

    setTimeout(() => {
      setIsFadingOut(true);
    }, 1000);
  };

  useEffect(() => {
    if (paintingId) {
      // ApiService.getById(`painting`, paintingId).then(res =>
      //   setPainting(res.data)
      // );
    }
  }, []);

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
      <div className="stop-indicator-wrapper">
        <div className={stopIndicatorStyle} onClick={handleClick}></div>
      </div>
      {isPreviewing && (
        <ItemPreviewPopUp isFadingOut={isFadingOut} paintingId={paintingId} />
      )}
      <b>StopItem: </b>
      <small>
        index: {journeyIndex}, ID: {paintingId}, exhibition: {exhibitionId}
      </small>
    </div>
  );
};

export default JourneyStopItem;
