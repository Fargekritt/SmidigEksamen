import React, { useRef, useState } from "react";
// import "./ToggleInput.scss";

const ToggleInput = ({ question, name, defaultChecked }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="user-input toggle-input">
      <h3 className="heading">{question}</h3>
      <div className="toggle-switch" onClick={handleClick}>
        <input
          ref={inputRef}
          name={name}
          type="checkbox"
          defaultChecked={defaultChecked}
        />
        <div className="toggle-switch-text">No</div>
        <div className="toggle-switch-text">Yes</div>
      </div>
    </div>
  );
};

export default ToggleInput;
