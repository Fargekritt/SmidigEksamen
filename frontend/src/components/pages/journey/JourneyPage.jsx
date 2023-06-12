// import React, { useEffect, useState } from "react";
import React, { useEffect, useState, useRef } from "react";
import JourneyStopList from "./JourneyStopList";
import "./journey-page.scss";
import CurrentStopSection from "./CurrentStopSection";
import ProgressBar from "./ProgressBar";
import arrowUp from "../../../assets/icons/arrow-up.svg";
import arrowDown from "../../../assets/icons/arrow-down.svg";
import CanvasMap from "./CanvasMap";

const JourneyPage = () => {
  const [journey, setJourney] = useState([
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
  ]);
  const [progress, setProgress] = useState({
    stops: journey.length,
    currentStop: 0,
  });

  const [coordinates, setCoordinates] = useState([]);
  const [canvas, setCanvas] = useState(null);

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
    <div className="page journey">
      <header>
        <h2>Journey</h2>
      </header>
      <div>
        <ProgressBar progress={progress} />
      </div>

      <p>stops: {progress.stops}</p>
      <p>currentStop: {progress.currentStop}</p>
      <div className="journey-button-wrapper">
        <button
          className="journey-button next"
          onClick={() => handleProgressChange(1)}
        >
          <img src={arrowUp} alt="arrow next"></img>
        </button>
        <button
          className="journey-button previous"
          onClick={() => handleProgressChange(-1)}
        >
          <img src={arrowDown} alt="arrow back"></img>
        </button>
      </div>

      {progress.stops > 0 && (
        <div className="map-wrapper">
          <JourneyStopList
            journeyStops={journey}
            currentStop={progress.currentStop}
            coordinates={coordinates}
            canvas={canvas}
          />
          <CanvasMap
            canvas={canvas}
            setCanvas={setCanvas}
            progress={progress}
            setProgress={setProgress}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
          />
        </div>
      )}

      {progress.stops && (
        <CurrentStopSection
          paintingId={journey[progress.currentStop].paintingId}
        />
      )}
    </div>
  );
};

export default JourneyPage;
