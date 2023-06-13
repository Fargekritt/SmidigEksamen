import RangeInput from "../journeyBuilder/RangeInput";
import ExternalLinks from "./ExternalLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import UpcomingEvents from "./UpcomingEvents";
import "./WrapUpPage.scss";
import downIcon from "../../../assets/icons/down.svg";

const WrapUpPage = ({ isVisible, setIsVisible }) => {
  const handleClick = () => {
    console.log("WRAPUP clicked");
    setIsVisible(false);
  };

  return (
    <div
      className={`page wrap-up ${
        isVisible && isVisible ? "visible" : "not-visible"
      }`}
    >
      <header>
        <nav>
          <button
            aria-label="Go back"
            onClick={handleClick}
            className="back-button"
          >
            &lt;
            {/* <img
              className="back-icon-icon"
              src={downIcon}
              alt="downwards pointing icon"
            /> */}
          </button>
        </nav>
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
