import { useEffect, useState } from "react";

const CurrentLocationHeading = ({ exhibitionData, currentStop }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextExhibition, setNextExhibition] = useState(exhibitionData);
  const [currentExhibition, setCurrentExhibition] = useState(() =>
    exhibitionData.find(
      exhibition => exhibition.id === currentStop.exhibitionId
    )
  );

  const findCurrentExhibition = () => {
    return exhibitionData.find(
      exhibition => exhibition.id === currentStop.exhibitionId
    );
  };

  useEffect(() => {
    const updatedCurrentExhibition = findCurrentExhibition();

    if (updatedCurrentExhibition !== currentExhibition) {
      setNextExhibition(updatedCurrentExhibition);
      setIsAnimating(true);
    }
  }, [currentStop]);

  const showCurrentLocation = () => {
    return (
      <>
        <div className="location-wrapper">
          <span
            onAnimationEnd={() => {
              setIsAnimating(false);
              setCurrentExhibition(nextExhibition);
            }}
            className={`current-floor ${
              isAnimating ? "slide-up-heading-exit" : ""
            }`}
          >
            {currentExhibition.floor}
          </span>
          <span
            className={`current-exhibition ${
              isAnimating ? "slide-up-heading-exit" : ""
            }`}
          >
            {currentExhibition.exhibitionName}
          </span>
        </div>

        <div className="location-wrapper next">
          <span
            className={`current-floor next ${
              isAnimating ? "slide-up-heading-enter" : ""
            }`}
          >
            {nextExhibition?.floor}
          </span>

          <span
            onAnimationEnd={() => setCurrentExhibition(nextExhibition)}
            className={`current-exhibition next ${
              isAnimating ? "slide-up-heading-enter" : ""
            }`}
          >
            {nextExhibition?.exhibitionName}
          </span>
        </div>
      </>
    );
  };

  return (
    <>
      {currentExhibition !== undefined && (
        <div className="current-location-heading-wrapper">
          {showCurrentLocation()}
        </div>
      )}
    </>
  );
};

export default CurrentLocationHeading;
