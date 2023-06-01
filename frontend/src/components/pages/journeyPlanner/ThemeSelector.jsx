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
    <div>
      <h3>What themes would you like to explore today?</h3>
      {renderInputs}
    </div>
  );
};

export default ThemeSelector;
