import { useState, useEffect } from "react";
import RenderImage from "../../shared/RenderImage";
import playIcon from "../../../assets/icons/play.svg";
import pauseIcon from "../../../assets/icons/pause.svg";

const CurrentStopSection = ({
  paintingId,
  paintingName,
  imagePath,
  handleViewPaintingPage,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [nextPaintingName, setNextPaintingName] = useState();
  const [painting, setPainting] = useState({ paintingName: "", imagePath: "" });
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    setPainting({ paintingName, imagePath });
    setNextPaintingName(paintingName);
  }, [paintingName, imagePath]);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
      setNextPaintingName(painting?.paintingName);
    }, 500);

    return () => clearTimeout(timeout);
  }, [paintingId]);

  return (
    <div className="current-stop-section-wrapper">
      <div className="current-stop-section" onClick={handleViewPaintingPage}>
        <RenderImage
          image={painting.imagePath}
          altText={painting.paintingName}
        />
        <div className="text-wrapper">
          <small>Du ser på:</small>
          <div className={`current-stop-name-container `}>
            <p
              className={`current-stop-name ${
                isAnimating ? "slide-left-exit" : ""
              }`}
            >
              {painting.paintingName}
            </p>
            <p
              className={`current-stop-name next ${
                isAnimating ? "slide-left-enter" : ""
              }`}
            >
              {nextPaintingName}
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="play-pause-button"
      >
        <img src={isPaused ? playIcon : pauseIcon} alt="" />
      </button>
    </div>
  );
};

export default CurrentStopSection;
