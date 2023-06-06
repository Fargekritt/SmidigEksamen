import React, { useEffect, useState } from "react";
import JourneyStopList from "./JourneyStopList";
import JourneyStopItem from "./JourneyStopItem";

const JourneyPage = () => {
  const [journey, setJourney] = useState([]);
  const [journeyProgress, setJourneyProgress] = useState({
    stops: journey.length,
    currentStop: 0,
  });

  const dummyJourney = [
    {
      paintingId: 1,
      floorId: 3,
    },
    {
      paintingId: 4,
      floorId: 3,
    },
    {
      paintingId: 5,
      floorId: 3,
    },
    {
      paintingId: 34,
      floorId: 4,
    },
    {
      paintingId: 30,
      floorId: 4,
    },
    {
      paintingId: 77,
      floorId: 8,
    },
  ];

  const getJourney = () => {
    const sortedPaintings = sortAscending(dummyJourney);
    setJourney(sortedPaintings);
  };

  useEffect(() => {
    getJourney();
  }, []);

  useEffect(() => {
    setJourneyProgress({
      ...journeyProgress,
      stops: journey.length,
      progressBar: calculatePercentage(
        journeyProgress.currentStop + 1,
        journey.length
      ),
    });
  }, [journey]);

  const handleProgressChange = num => {
    const newCurrentStop = journeyProgress.currentStop + num;

    if (newCurrentStop < 0 || newCurrentStop > journey.length - 1) {
      return;
    } else {
      setJourneyProgress(prevState => {
        const updatedCurrentStop = prevState.currentStop + num;
        const progressBar = calculatePercentage(
          updatedCurrentStop + 1,
          journey.length
        );

        return {
          ...prevState,
          currentStop: updatedCurrentStop,
          progressBar: progressBar,
        };
      });
    }
  };

  const sortAscending = paintings => {
    return paintings.sort((a, b) => a.paintingId - b.paintingId);
  };

  const calculatePercentage = (number, total) => {
    const percentage = (number / total) * 100;
    return percentage.toFixed(2);
  };

  return (
    <div>
      JourneyPage
      <JourneyStopList journeyStops={journey} />
      <p>stops: {journeyProgress.stops}</p>
      <p>currentStop: {journeyProgress.currentStop}</p>
      <button onClick={() => handleProgressChange(-1)}>Previous</button>
      <button onClick={() => handleProgressChange(1)}>Next</button>
      <br />
      <br />
      <div>
        <p>Current journey stop:</p>

        {journey.length && (
          <JourneyStopItem
            key={`currentlyViewing-${
              journey[journeyProgress.currentStop].paintingId
            }`}
            paintingId={journey[journeyProgress.currentStop].paintingId}
            floorId={journey[journeyProgress.currentStop].floorId}
          ></JourneyStopItem>
        )}
      </div>
      <div>
        Journeyprogressbar
        <p>{journeyProgress.progressBar}</p>
      </div>
    </div>
  );
};

export default JourneyPage;
