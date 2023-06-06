import React from "react";
import JourneyStopItem from "./JourneyStopItem";

const JourneyStopList = ({ journeyStops, currentStop }) => {
  const renderJourneyStops = () =>
    journeyStops.map(({ paintingId, exhibitionId }, i) => (
      <JourneyStopItem
        isCurrent={currentStop === i}
        journeyIndex={i}
        key={paintingId}
        paintingId={paintingId}
        exhibitionId={exhibitionId}
      />
    ));

  return <div>{renderJourneyStops()}</div>;
};

export default JourneyStopList;
