import React from "react";
import ThemeOption from "./ThemeOption";

export const themeOptions = [
  "Landscape",
  "Interior",
  "Portrait",
  "Place",
  "Nature",
  "Love",
  "Time",
  "Family",
  "Anxiety",
  "Jealousy",
];

const ThemeSelector = () => {
  const renderInputs = themeOptions.map((item, i) => {
    return <ThemeOption key={item} label={item} />;
  });
  return (
    <div className="user-input theme-selector">
      <h3 className="heading">Hvilke temaer ønsker du å utforske i dag?</h3>
      <div className="theme-options-wrapper">{renderInputs}</div>
    </div>
  );
};

export default ThemeSelector;
