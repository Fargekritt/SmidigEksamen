import ThemeSelector from "./ThemeSelector";
import RangeInput from "./RangeInput";
import ToggleInput from "./ToggleInput";
import { useState } from "react";

const JourneyPlannerPage = () => {
  const [timeInput, setTimeInput] = useState(90); // !!
  const [familiarityInput, setFamiliarityInput] = useState(0); // !!

  const handleSubmit = e => {
    e.preventDefault();

    const dataToSubmit = Object.values(e.target).reduce(
      (prev, { name, value, ...props }) => {
        if (name === "familiarityInput") {
          Object.assign(prev, { [name]: value });
          return prev;
        }

        if (name === "timeInput") {
          Object.assign(prev, { [name]: value });
          return prev;
        }

        if (name === "themeOption" && props.checked) {
          Object.assign(prev, {
            themeOptions: [...prev.themeOptions, value],
          });
          return prev;
        }

        if (name === "interactiveToggle") {
          Object.assign(prev, { [name]: props.checked });
          return prev;
        }

        return prev;
      },
      {
        themeOptions: [],
      }
    );
    console.log(dataToSubmit);
  };

  const setTimeOptionLabel = () => {
    if (timeInput >= 180) {
      return "I got all day!";
    }
    if (timeInput >= 120) {
      return "2h" + (timeInput - 120) + "min";
    }
    if (timeInput >= 60) {
      return "1h" + (timeInput - 60) + "min";
    }
    return timeInput + "min";
  };

  const familiarityOptionLabels = {
    0: "Munch who?",
    1: "I've heard of him",
    2: "I know quite a bit",
    3: "I know more than most",
    4: "I'm an extremely devoted fan",
  };

  return (
    <div>
      <h1>JourneyPlanner</h1>
      <form onSubmit={handleSubmit}>
        <RangeInput
          question={"How much time do you have?"}
          name={"timeInput"}
          step={10}
          minValue={20}
          maxValue={180}
          defaultValue={90}
          optionLabel={setTimeOptionLabel()}
          onInput={e => {
            setTimeInput(e.target.value);
          }}
        />

        <RangeInput
          question={"How familiar are you with Munch?"}
          name={"familiarityInput"}
          minValue={0}
          maxValue={4}
          defaultValue={0}
          optionLabel={familiarityOptionLabels[familiarityInput]}
          onInput={e => {
            setFamiliarityInput(e.target.value);
          }}
        />

        <ThemeSelector />

        <ToggleInput
          question={
            "Do you want to include interactive exhibitions in your journey?"
          }
          name={"interactiveToggle"}
          defaultChecked={true}
        />

        <button>Create my journey</button>
      </form>
    </div>
  );
};

export default JourneyPlannerPage;
