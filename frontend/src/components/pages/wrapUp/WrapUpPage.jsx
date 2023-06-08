import RangeInput from "../journeyPlanner/RangeInput";
import ExternalLinks from "./ExternalLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import UpcomingEvents from "./UpcomingEvents";
import "./WrapUpPage.scss";

const WrapUpPage = () => {
  return (
    <div className="page">
      <header>
        <button aria-label="Go back" onclick="goBack()" className="back-button">
          &lt;
        </button>
        <h1>WrapUp Page</h1>
      </header>
      <div className="feedback">
        <RangeInput
          question={
            "For en opplevelse! Vi håper du har skapt deg et spesielt ØYEBLIKK i din reise gjennom Edvard Munchs kunst. Hvordan likte du det?"
          }
          minValue={0}
          maxValue={10}
          optionLabel={"hei"}
        />
      </div>
      <UpcomingEvents />
      <ExternalLinks />
      <SocialMediaLinks />
    </div>
  );
};

export default WrapUpPage;
