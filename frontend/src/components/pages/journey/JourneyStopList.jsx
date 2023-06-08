import React from "react";
import JourneyStopItem from "./JourneyStopItem";

const JourneyStopList = ({ journeyStops, currentStop }) => {
  const renderJourneyStops = () => {
    const journeyMapData = journeyStops.reduce((prev, curr, i) => {
      if (!prev.length) {
        prev.push(curr);
        return prev;
      }

      if (prev.at(i - 1).exhibitionId < curr.exhibitionId) {
        prev.push({ stairs: curr.exhibitionId });
      }
      prev.push(curr);
      return prev;
    }, []);

    let i = -1;
    return journeyMapData.map(item => {
      if (item.stairs) {
        return (
          <div key={`${item.stairs}-${i}`} className="journey-map-stairs">
            :::STAIRS:::
          </div>
        );
      }
      const { paintingId, exhibitionId } = item;

      i++;
      return (
        <JourneyStopItem
          currentStop={currentStop}
          journeyIndex={i}
          key={paintingId}
          paintingId={paintingId}
          exhibitionId={exhibitionId}
        />
      );
    });
  };

  return <div>{renderJourneyStops()}</div>;
};

export default JourneyStopList;
