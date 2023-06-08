import React from "react";
import Logo from "./Logo";
import SubHeading from "./SubHeading";
import "./FrontPage.scss";
import { Link } from "react-router-dom";

const FrontPage = () => {
  const handleClick = () => {};

  return (
    <div className="page front-page">
      <div className="logo-container">
        <div className="logo logo-text-top">MUNCH</div>
        <div className="logo logo-text-bottom">MOMENT</div>
      </div>
      <div className="sub-heading-container">
        <p className="sub-heading-text-top">
          Experience art, ignite emotion, discover yourself
        </p>
        <p className="sub-heading-text-bottom">
          Embark on a personalized journey through the art of Edvard Munch
        </p>
      </div>
      <Link to="create">
        <button className="button default submit-button">Kom i gang</button>
      </Link>
    </div>
  );
};

export default FrontPage;
