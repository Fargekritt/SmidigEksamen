import React, { useState, useEffect } from "react";
import RenderImage from "../../shared/RenderImage";
import ApiService from "../../../services/ApiService";

const CurrentStopSection = ({ paintingId }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPaintingName, setCurrentPaintingName] = useState();
  const [painting, setPainting] = useState({ paintingName: "", imagePath: "" });

  useEffect(() => {
    const fetchPaintingData = async () => {
      try {
        const nameResponse = await ApiService.getById(
          "painting",
          paintingId + "/name"
        );
        const pathResponse = await ApiService.getById(
          "painting",
          paintingId + "/path"
        );

        const updatedPainting = {
          paintingName: nameResponse.data,
          imagePath: pathResponse.data,
        };

        setPainting(updatedPainting);
        setCurrentPaintingName(updatedPainting.paintingName);
      } catch (err) {
        return Promise.reject(err);
      }
    };

    fetchPaintingData();
  }, [paintingId]);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
      setCurrentPaintingName(painting.paintingName);
    }, 500);

    return () => clearTimeout(timeout);
  }, [paintingId]);

  return (
    <div className="current-stop-section">
      <RenderImage image={painting.imagePath} altText={painting.paintingName} />
      <div className="text-wrapper">
        <small>Currently viewing:</small>
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
            {currentPaintingName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentStopSection;
