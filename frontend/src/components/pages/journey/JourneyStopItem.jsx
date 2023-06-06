import React from "react";

const JourneyStopItem = ({
  paintingId,
  exhibitionId,
  journeyIndex,
  isCurrent,
}) => {
  console.log(isCurrent);
  return (
    <div>
      <div className={`stop-item ${isCurrent === true ? `current` : ""}`}></div>
      <b>JourneyStopItem, name: </b>
      <p>
        index:{journeyIndex}, ID: {paintingId}, floor: {exhibitionId}
      </p>
    </div>
  );
};

export default JourneyStopItem;
