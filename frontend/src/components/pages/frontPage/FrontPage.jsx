import React from "react";
import Logo from "./Logo";
import SubHeading from "./SubHeading";
import "./FrontPage.scss";

const FrontPage = () => {
  return (
    <div className="page front-page">
      <div className="logo-container">
        <div className="logo logo-text-top">MUNCH</div>
        <div className="logo logo-text-bottom">MOMENT</div>
      </div>
      <div className="sub-heading-container">
        <p className="sub-heading-text">
          Experience art, ignite emotion, discover yourself
        </p>
        <p className="sub-heading-text">
          Embark on a personalized journey through the art of Edvard Munch
        </p>
      </div>
      <button className="button default submit-button">Kom i gang</button>
    </div>
  );
};

export default FrontPage;
