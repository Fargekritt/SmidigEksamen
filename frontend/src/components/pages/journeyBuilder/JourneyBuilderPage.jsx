import ThemeSelector from "./ThemeSelector";
import RangeInput from "./RangeInput";
import ToggleInput from "./ToggleInput";
import { useState, useContext, useEffect } from "react";
import { JourneyContext } from "../../../contexts/JourneyContext";

import ApiService from "../../../services/ApiService";
import "./journey-builder-page.scss";
import Modal from "./Modal";

const JourneyBuilderPage = () => {
  const [timeInput, setTimeInput] = useState(90);
  const [familiarityInput, setFamiliarityInput] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { journeyData, setJourneyData } = useContext(JourneyContext);

  const handleSubmit = async e => {
    e.preventDefault();

    const dataToSubmit = Object.values(e.target).reduce(
      (prev, { name, value, ...props }) => {
        if (name === "familiarityInput") {
          const num = parseInt(value);
          Object.assign(prev, { familiarity: num });
          return prev;
        }

        if (name === "timeInput") {
          const num = parseInt(value);
          Object.assign(prev, { time: num });
          return prev;
        }

        if (name === "themeOption" && props.checked) {
          Object.assign(prev, {
            themes: [...prev.themes, value],
          });
          return prev;
        }

        if (name === "interactiveToggle") {
          Object.assign(prev, { interactive: props.checked });
          return prev;
        }

        return prev;
      },
      {
        themes: [],
      }
    );

    submitData(dataToSubmit);
  };

  const submitData = async dataToSubmit => {
    try {
      const res = await ApiService.postFormData(dataToSubmit, `journey/new`);
      setJourneyData(res.data);
      sessionStorage.setItem("journey", JSON.stringify(res.data));
    } catch (err) {
      return Promise.reject(err);
    }
    setIsModalOpen(true);
  };

  const setTimeOptionLabel = () => {
    if (timeInput >= 180) {
      return "Jeg har satt av hele dagen!";
    }
    if (timeInput >= 120) {
      return "2t" + (timeInput - 120) + "min";
    }
    if (timeInput >= 60) {
      return "1t" + (timeInput - 60) + "min";
    }
    return timeInput + "min";
  };

  const familiarityOptionLabels = {
    0: "Munch hvem?",
    1: "Han som har malt Skrik, ikke sant?",
    2: "Jeg har litt kjennskap",
    3: "Jeg har mer kjennskap enn de fleste",
    4: "Madonna er bakgrunnsbildet på mobilen min",
  };

  return (
    <div className="page journey-builder">
      <header className="page-header">
        <h2 className="heading">Lag din egen reise</h2>
      </header>

      <form className="journey-builder-form" onSubmit={handleSubmit}>
        <h2 className="heading">Lag din egen reise</h2>
        <RangeInput
          question={"Hvor mye tid vil du bruke?"}
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
          question={"Hvor godt kjenner du til Munch sine verk?"}
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
          question={"Vil du inkludere interaktive utstillinger \n i din reise?"}
          name={"interactiveToggle"}
          defaultChecked={true}
        />

        <button className="button default submit-button">lag min reise</button>
      </form>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default JourneyBuilderPage;
