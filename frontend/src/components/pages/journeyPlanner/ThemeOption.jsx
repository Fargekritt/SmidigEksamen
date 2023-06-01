import React, { useRef, useState } from "react";

const ThemeOption = ({ label }) => {
  const inputRef = useRef(null);
  const [toggleState, setToggleState] = useState();

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
      setToggleState(() => (inputRef.current.checked ? "toggled" : ""));
    }
  };

  const toggleClassName = `user-input theme-option button toggleable ${toggleState}`;

  return (
    <div className={toggleClassName} onClick={handleClick}>
      <input
        value={label}
        name="themeOption"
        type="checkbox"
        ref={inputRef}
      ></input>
      <label>{label}</label>
    </div>
  );
};

export default ThemeOption;
