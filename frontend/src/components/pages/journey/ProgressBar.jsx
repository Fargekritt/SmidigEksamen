import React from "react";

const ProgressBar = ({ progress }) => {
  return (
    <div>
      ProgressBar
      <p>{progress}/100</p>
      <div
        className="progressBar"
        style={{ "--progress-width": `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
