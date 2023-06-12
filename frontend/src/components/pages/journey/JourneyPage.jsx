import React, { useEffect, useState, useContext } from "react";
import JourneyStopList from "./JourneyStopList";
import "./journey-page.scss";
import CurrentStopSection from "./CurrentStopSection";
import ProgressBar from "./ProgressBar";
import arrowUp from "../../../assets/icons/arrow-up.svg";
import arrowDown from "../../../assets/icons/arrow-down.svg";
import { JourneyContext } from "../../../contexts/JourneyContext";
import ApiService from "../../../services/ApiService";
import PaintingPage from "../painting/PaintingPage";
import WrapUpPage from "../wrapUp/WrapUpPage";

const calculatePercentage = (number, total) => {
  return ((number / total) * 100).toFixed(0);
};

const JourneyPage = () => {
  const [journey, setJourney] = useState([]);
  const [progress, setProgress] = useState({
    stops: journey?.length,
    currentStop: 0,
  });
  const [exhibitionData, setExhibitionData] = useState([]);
  const [paintingPageIsVisible, setPaintingPageIsVisible] = useState(false);
  const [wrapUpPageIsVisible, setWrapUpPageIsVisible] = useState(false);
  const { journeyData, setJourneyData } = useContext(JourneyContext);

  useEffect(() => {
    if (!journeyData) {
      const journeyInStorage = JSON.parse(sessionStorage.getItem("journey"));
      if (journeyInStorage) {
        setJourneyData(journeyInStorage);
      }
    }
    if (journeyData) {
      const sortedPaintings = journeyData.stops.sort(
        (a, b) => a.paintingId - b.paintingId
      );
      setJourney(sortedPaintings);
    }
  }, [journeyData]);

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

  useEffect(() => {
    const getExhibitionData = async () => {
      const exhibitionsInStorage = JSON.parse(
        sessionStorage.getItem("exhibitions")
      );
      if (exhibitionsInStorage) {
        setExhibitionData(exhibitionsInStorage);
      } else {
        try {
          const res = await ApiService.getAll("exhibition").then(
            res => res.data
          );
          setExhibitionData(res);
          sessionStorage.setItem("exhibitions", JSON.stringify(res));
        } catch (err) {
          return Promise.reject(err);
        }
      }
    };
    getExhibitionData();
  }, []);

  useEffect(() => {
    if (journey.length) {
      const fetchCurrentPaintingData = async () => {
        try {
          await ApiService.getById(
            "painting",
            journey[progress.currentStop].paintingId
          ).then(res => {
            setJourneyData(journeyData => {
              return {
                ...journeyData,
                currentPaintingData: res.data,
              };
            });
          });
        } catch (err) {
          console.log(err);
        }
      };
      fetchCurrentPaintingData();
    }
  }, [progress]);

  const handleProgressChange = indexChange => {
    setProgress(prevState => {
      const nextStop = prevState.currentStop + indexChange;

      if (nextStop < 0) {
        return prevState;
      }
      if (nextStop > journey.length - 1) {
        setWrapUpPageIsVisible(true);
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

  return (
    <>
      <div className="page journey">
        <header>
          <h2>Journey</h2>
        </header>
        <div>
          <ProgressBar progress={progress} />
        </div>
        {journey.length && (
          <>
            <JourneyStopList
              journeyStops={journey}
              currentStop={progress.currentStop}
            />

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

            <CurrentStopSection
              handleViewPaintingPage={() => setPaintingPageIsVisible(true)}
              paintingName={journeyData.currentPaintingData?.paintingName}
              imagePath={journeyData.currentPaintingData?.imagePath}
              paintingId={journey[progress.currentStop]?.paintingId}
            />
          </>
        )}
      </div>

      <PaintingPage
        painting={journeyData?.currentPaintingData}
        isVisible={paintingPageIsVisible}
        setIsVisible={setPaintingPageIsVisible}
      />
      {wrapUpPageIsVisible && (
        <WrapUpPage
          isVisible={wrapUpPageIsVisible}
          setIsVisible={setWrapUpPageIsVisible}
        />
      )}
    </>
  );
};

export default JourneyPage;
