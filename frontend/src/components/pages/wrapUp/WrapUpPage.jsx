import RangeInput from "../journeyPlanner/RangeInput";
import ExternalLinks from "./ExternalLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import "./WrapUpPage.scss";

const WrapUpPage = () => {
  return (
    <div className="page">
      <h1>WrapUp Page</h1>
      <RangeInput
        question={"Hvordan likte du det?"}
        minValue={0}
        maxValue={10}
        optionLabel={"hei"}
      />
      <SocialMediaLinks />
      <ExternalLinks />
    </div>
  );
};

export default WrapUpPage;
