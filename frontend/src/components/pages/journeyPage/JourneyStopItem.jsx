import React from "react";

const JourneyStopItem = ({ paintingId, floorId }) => {
  return (
    <div>
      <b>JourneyStopItem</b>
      <p>ID: {paintingId}</p>
      <p>floor: {floorId}</p>
    </div>
  );
};

export default JourneyStopItem;
