import { useState, useEffect } from "react";
import ItemPreviewPopUp from "./ItemPreviewPopUp";
import userIcon from "../../../assets/icons/user.svg";

const JourneyStopItem = ({
  paintingId,
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
      className={`journey-stop-item journey-map-indicator`}
      style={{
        left: `${coordinates.x}%`,
        top: `${coordinates.y}%`,
        animationDelay: `1.${journeyIndex}s`,
      }}
    >
      <div className="stop-indicator-wrapper">
        <div className={stopIndicatorStyle} onClick={handleClick}>
          {currentStop === journeyIndex && (
            <img src={userIcon} alt="user icon" />
          )}
        </div>
      </div>
      {isPreviewing && (
        <ItemPreviewPopUp isFadingOut={isFadingOut} paintingId={paintingId} />
      )}
    </div>
  );
};

export default JourneyStopItem;
