import React, { useEffect, useState } from "react";
import JourneyStopList from "./JourneyStopList";
import "./journeyPage.scss";
import CurrentStop from "./CurrentStop";
import ProgressBar from "./ProgressBar";

const JourneyPage = () => {
  const [journey, setJourney] = useState([]);
  const [progress, setProgress] = useState({
    stops: journey.length,
    currentStop: 0,
  });

  const dummyJourney = [
    {
      paintingId: 1,
      exhibitionId: 3,
    },
    {
      paintingId: 4,
      exhibitionId: 3,
    },
    {
      paintingId: 5,
      exhibitionId: 3,
    },
    {
      paintingId: 34,
      exhibitionId: 4,
    },
    {
      paintingId: 30,
      exhibitionId: 4,
    },
    {
      paintingId: 77,
      exhibitionId: 8,
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
    setProgress({
      ...progress,
      stops: journey.length,
      progressBar: calculatePercentage(
        progress.currentStop + 1,
        journey.length
      ),
    });
  }, [journey]);

  const handleProgressChange = num => {
    const newCurrentStop = progress.currentStop + num;

    if (newCurrentStop < 0 || newCurrentStop > journey.length - 1) {
      return;
    } else {
      setProgress(prevState => {
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
    console.log(progress);
  };

  const sortAscending = paintings => {
    return paintings.sort((a, b) => a.paintingId - b.paintingId);
  };

  const calculatePercentage = (number, total) => {
    return ((number / total) * 100).toFixed(0);
  };

  return (
    <div className="page">
      JourneyPage
      <JourneyStopList
        journeyStops={journey}
        currentStop={progress.currentStop}
      />
      <p>stops: {progress.stops}</p>
      <p>currentStop: {progress.currentStop}</p>
      <button onClick={() => handleProgressChange(-1)}>Previous</button>
      <button onClick={() => handleProgressChange(1)}>Next</button>
      <br />
      <br />
      <div>
        {journey.length && (
          <CurrentStop paintingId={journey[progress.currentStop].paintingId} />
        )}
      </div>
      <div>
        <ProgressBar progress={progress.progressBar} />
      </div>
    </div>
  );
};

export default JourneyPage;
