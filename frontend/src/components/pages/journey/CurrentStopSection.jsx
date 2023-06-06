import React from "react";

const CurrentStopSection = ({ paintingId }) => {
  /* Mising:
  - Get painting info from api
  - Return name, image */
  return (
    <div className="current-stop-section">
      <img src="" alt="" />
      <div>
        <p>Currently viewing: </p>
        <p>{paintingId} (name)</p>
      </div>
    </div>
  );
};

export default CurrentStopSection;
