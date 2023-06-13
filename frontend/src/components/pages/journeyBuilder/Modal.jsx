import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../../../assets/lotties/checkmark";
import { Link } from "react-router-dom";

const Modal = ({ isModalOpen, setIsModalOpen, modalContent }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    setIsModalOpen(isModalOpen);
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="overlay" />
      {isModalOpen && (
        <dialog
          ref={dialogRef}
          className={`modal ${isModalOpen ? "open" : ""}`}
        >
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>

            <Lottie
              animationData={animationData}
              height={100}
              width={100}
              loop={false}
              style={{ height: 100, width: 100, margin: "auto" }}
            ></Lottie>

            <p className="heading"> En Journey er opprettet til deg!</p>
            <br />

            <p>Her er din helt egen url. Klikk for å starte din Journey:</p>
            <p> {modalContent}</p>

            <Link to={"/journey"}>
              <button>Start Journey</button>
            </Link>

            <br />
            <p className="bottom-text">
              Ønsker du å dele din Journey <br />
              med noen? <br />
              Del linken og gå sammen!
            </p>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Modal;
