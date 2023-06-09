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
        <h1> Ditt Munch moment</h1>
      </header>
      <div className="feedback">
        <p>
          For en opplevelse! Vi håper du har skapt deg et spesielt MUNCH MOMENT
          i din reise gjennom Edvard Munchs kunst.
        </p>
        <div className="slider-container">
          <div className="slider-symbol slider-symbol-left">😡</div>
          <RangeInput
            question={"Hvordan likte du din skreddersydde reise?"}
            minValue={0}
            maxValue={10}
            // optionLabel={"hei"}
          />
          <div className="slider-symbol slider-symbol-right">😍</div>
        </div>
      </div>

      <UpcomingEvents />
      <ExternalLinks />
      <SocialMediaLinks />
    </div>
  );
};

export default WrapUpPage;
