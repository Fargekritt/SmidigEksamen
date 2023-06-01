import React from "react";

const ThemeOption = ({ label }) => {
  return (
    <div>
      <input value={label} name="themeOption" type="checkbox"></input>
      <label>{label}</label>
    </div>
  );
};

export default ThemeOption;
