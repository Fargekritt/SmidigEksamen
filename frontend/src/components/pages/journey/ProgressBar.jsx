import React from "react";

const calculatePercentage = (currentStop, total) => {
  return ((currentStop / (total - 1)) * 100).toFixed(0);
};

const ProgressBar = ({ progress: { stops, currentStop } }) => {
  const currentProgress = calculatePercentage(currentStop, stops);

  return (
    <div>
      ProgressBar
      <p>{currentProgress}/100</p>
      <div
        className="progressBar"
        style={{ "--progress-width": `${currentProgress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
