import ThemeSelector from "./ThemeSelector";
import RangeInput from "./RangeInput";
import ToggleInput from "./ToggleInput";
import { useState } from "react";
import ApiService from "../../../services/ApiService";
import "./journeyPlannerPage.scss";
import Modal from "../../Modal";

const JourneyPlannerPage = () => {
  const [timeInput, setTimeInput] = useState(90); // !!
  const [familiarityInput, setFamiliarityInput] = useState(0); // !!
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

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
    // console.log(dataToSubmit);
    submitData(dataToSubmit);
  };

  const submitData = async dataToSubmit => {
    try {
      const res = await ApiService.postFormData(dataToSubmit);
      setModalContent(JSON.stringify(res.data));
    } catch (err) {
      return Promise.reject(err);
    }
    setIsModalOpen(true);
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
    <div className="page">
      {/* <h1>JourneyPlanner</h1> */}
      <h2>Let's make your journey!</h2>
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
            "Do you want to include interactive exhibitions \n in your journey?"
          }
          name={"interactiveToggle"}
          defaultChecked={true}
        />

        <button className="button default submit-button">
          Create my journey
        </button>
      </form>

      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalContent={modalContent}
      />
    </div>
  );
};

export default JourneyPlannerPage;
