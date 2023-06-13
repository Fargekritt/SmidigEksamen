import React from "react";
import JourneyStopItem from "./JourneyStopItem";

const calculatePercentage = (number, total) => {
  return parseFloat(((number / total) * 100).toFixed(2));
};

const JourneyStopList = ({
  journeyStops,
  currentStop,
  coordinates,
  canvas,
}) => {
  const renderJourneyStops = () => {
    if (!coordinates.length) {
      return null;
    }
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
      const itemCoordinates = {
        x: calculatePercentage(coordinates[i + 1]?.x, canvas?.width),
        y: calculatePercentage(coordinates[i + 1]?.y, canvas?.height),
      };

      if (item.stairs) {
        return (
          <div
            key={`${item.stairs}-${i}`}
            className="journey-map-stairs journey-map-indicator"
          >
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
          coordinates={itemCoordinates}
        />
      );
    });
  };

  return <div className="journey-stop-list">{renderJourneyStops()}</div>;
};

export default JourneyStopList;
