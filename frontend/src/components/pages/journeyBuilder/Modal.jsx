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

            <p className="heading">A journey has been created just for you!</p>
            <br />

            <p>Heres your very own url. Click to start your journey:</p>
            <p> {modalContent}</p>

            <Link to={"/journey"}>
              <button>Start journey</button>
            </Link>

            <br />
            <p className="bottom-text">
              Do you want to share your journey <br />
              with someone? <br />
              Share the link and go together!
            </p>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Modal;
