import React, { useEffect, useState, useContext } from "react";
import JourneyStopList from "./JourneyStopList";
import "../../../assets/styles/app.scss";
import "./journey-page.scss";
import CurrentStopSection from "./CurrentStopSection";
import ProgressBar from "./ProgressBar";
import arrowUp from "../../../assets/icons/arrow-up.svg";
import arrowDown from "../../../assets/icons/arrow-down.svg";
import CanvasMap from "./CanvasMap";
import { JourneyContext } from "../../../contexts/JourneyContext";
import ApiService from "../../../services/ApiService";
import PaintingPage from "../painting/PaintingPage";
import WrapUpPage from "../wrapUp/WrapUpPage";
import CurrentLocationHeading from "./CurrentLocationHeading";

const calculatePercentage = (number, total) => {
  return ((number / total) * 100).toFixed(0);
};

const JourneyPage = () => {
  const [journey, setJourney] = useState([]);
  const [progress, setProgress] = useState({
    stops: journey?.length,
    currentStop: 0,
  });

  const [coordinates, setCoordinates] = useState([]);
  const [canvas, setCanvas] = useState(null);

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
      const sortedJourney = journeyData.stops.sort((a, b) => {
        if (a.exhibitionId !== b.exhibitionId) {
          return a.exhibitionId - b.exhibitionId;
        } else {
          return a.paintingId - b.paintingId;
        }
      });

      setJourney(sortedJourney);
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

  const findCurrentExhibition = () => {
    console.log(journey);
    if (exhibitionData.length && journey.length) {
      return exhibitionData.find(
        exhibition => exhibition.id === journey[0].exhibitionId
      );
    }
  };

  findCurrentExhibition();

  return (
    <div>
      <div className="page journey">
        <header className="page-header">
          <h2 className="heading">Journey</h2>
        </header>

        <div>
          <ProgressBar progress={progress} />
        </div>

        {progress.stops > 0 && (
          <>
            <CurrentLocationHeading
              exhibitionData={exhibitionData}
              currentStop={journey[progress.currentStop]}
            />
            <p className={`journey-start-indicator`}>
              {/* Reisen din starter i {() => findCurrentExhibition} .. */}
            </p>

            <div className="journey-button-wrapper">
              <button
                className="journey-button next"
                onClick={() => handleProgressChange(1)}
              >
                <img src={arrowUp} alt="arrow next"></img>
              </button>
              <button
                disabled={progress.currentStop <= 0 ? true : false}
                className="journey-button previous"
                onClick={() => handleProgressChange(-1)}
              >
                <img src={arrowDown} alt="arrow back"></img>
              </button>
            </div>

            <div className="map-wrapper">
              <div className="map-content">
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
            </div>
            <CurrentStopSection
              handleViewPaintingPage={() => {
                console.log(paintingPageIsVisible);
                setPaintingPageIsVisible(true);
              }}
              paintingName={journeyData.currentPaintingData?.paintingName}
              imagePath={journeyData.currentPaintingData?.imagePath}
              paintingId={journey[progress.currentStop]?.paintingId}
            />
          </>
        )}
      </div>

      {paintingPageIsVisible && (
        <PaintingPage
          painting={journeyData?.currentPaintingData}
          isVisible={paintingPageIsVisible}
          setIsVisible={setPaintingPageIsVisible}
        />
      )}
      {wrapUpPageIsVisible && (
        <WrapUpPage
          isVisible={wrapUpPageIsVisible}
          setIsVisible={setWrapUpPageIsVisible}
        />
      )}
    </div>
  );
};

export default JourneyPage;
