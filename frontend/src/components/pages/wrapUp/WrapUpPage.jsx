import RangeInput from "../journeyBuilder/RangeInput";
import ExternalLinks from "./ExternalLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import UpcomingEvents from "./UpcomingEvents";
import "./wrap-up-page.scss";
import downIcon from "../../../assets/icons/down.svg";
import { useState } from "react";

const WrapUpPage = ({ setIsVisible }) => {
  const [animateCloseWrapUpPage, setAnimateCloseWrapUpPage] = useState(false);

  return (
    <div
      onAnimationEnd={() => {
        if (animateCloseWrapUpPage === true) {
          setIsVisible(false);
          setAnimateCloseWrapUpPage(false);
        }
      }}
      className={`page wrap-up ${
        !animateCloseWrapUpPage ? "visible" : "not-visible"
      }`}
    >
      <header className="page-header">
        <button
          aria-label="Go back"
          onClick={() => setAnimateCloseWrapUpPage(true)}
          className="back-button item-left"
        >
          <img
            className="back-icon"
            src={downIcon}
            alt="downwards pointing icon"
          />
        </button>

        <h2 className="heading"> Ditt MUNCH MOMENT</h2>
      </header>
      <div className="wrap-up-page-content">
        <div className="feedback">
          <p>
            For en opplevelse! Vi håper du har skapt deg et spesielt MUNCH
            MOMENT i din reise gjennom Edvard Munchs kunst.
          </p>
          <div className="slider-container">
            <RangeInput
              question={"Hvordan likte du din skreddersydde reise?"}
              minValue={0}
              maxValue={10}
            />
          </div>
        </div>

        <UpcomingEvents />
        <ExternalLinks />
        <SocialMediaLinks />
      </div>
    </div>
  );
};

export default WrapUpPage;
