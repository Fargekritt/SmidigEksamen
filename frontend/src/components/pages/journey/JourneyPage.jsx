import React, { useEffect, useState } from "react";
import JourneyStopList from "./JourneyStopList";
import "./journeyPage.scss";
import CurrentStopSection from "./CurrentStopSection";
import ProgressBar from "./ProgressBar";
import { calculatePercentage } from "../../../utils/calculate";

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

  useEffect(() => {
    const sortedPaintings = dummyJourney.sort(
      (a, b) => a.paintingId - b.paintingId
    );

    setJourney(sortedPaintings);
  }, []);

  useEffect(() => {
    setProgress(prevState => {
      return {
        ...prevState,
        stops: journey.length,
        progressBar: calculatePercentage(
          progress.currentStop + 1,
          journey.length
        ),
      };
    });
  }, [journey]);

  const handleProgressChange = indexChange => {
    setProgress(prevState => {
      const nextStop = prevState.currentStop + indexChange;

      if (nextStop < 0 || nextStop > journey.length - 1) {
        return prevState;
      }

      const progressBar = calculatePercentage(nextStop + 1, journey.length);

      return {
        ...prevState,
        currentStop: nextStop,
        progressBar: progressBar,
      };
    });
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
          <CurrentStopSection
            paintingId={journey[progress.currentStop].paintingId}
          />
        )}
      </div>
      <div>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default JourneyPage;
