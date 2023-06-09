import React from "react";
import Logo from "./Logo";
import SubHeading from "./SubHeading";
import "./front-page.scss";
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
          Opplev kunst, vekk følelser, oppdag deg selv
        </p>
        <p className="sub-heading-text-bottom">
          Begi deg ut på en personlig reise gjennom kunsten til Edvard Munch
        </p>
      </div>
      <Link to="create">
        <button className="button default submit-button">Kom i gang</button>
      </Link>
    </div>
  );
};

export default FrontPage;
