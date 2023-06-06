import React from "react";
import JourneyStopItem from "./JourneyStopItem";

const JourneyStopList = ({ journeyStops }) => {
  const renderJourneyStops = () =>
    journeyStops.map(({ paintingId, floorId }) => (
      <JourneyStopItem
        key={paintingId}
        paintingId={paintingId}
        floorId={floorId}
      />
    ));

  return <div>{renderJourneyStops()}</div>;
};

export default JourneyStopList;
