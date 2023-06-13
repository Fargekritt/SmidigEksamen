import { useState, useEffect, useLayoutEffect, useRef } from "react";
import CommentItem from "../painting/CommentItem";
import { render } from "@testing-library/react";
import ApiService from "../../../services/ApiService";
// import "../painting/painting-page.scss";
import sendIcon from "../../../assets/icons/paper-plane.svg";
import arrowDown from "../../../assets/icons/arrow-down.svg";
import "./comment-page.scss";

const CommentPage = ({
  paintingId,
  setComments,
  comments,
  isVisible,
  setIsVisible,
}) => {
  const inputRef = useRef();
  const [textareaHasLength, setTextareaHasLength] = useState(false);
  const renderComments = comments.map((comment, i) => {
    return (
      <CommentItem key={comment.id} text={comment.text} date={comment.date} />
    );
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const dataToSubmit = {
      text: Object.values(e.target)[0].value,
      paintingId: 3,
    };
    console.log(typeof dataToSubmit);
    submitData(dataToSubmit);
  };

  const submitData = async dataToSubmit => {
    console.log(dataToSubmit);
    try {
      const res = await ApiService.postFormData(dataToSubmit, `comment/new`);
      // .then(res => setComments(prevState => [...prevState, res.data]));
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={`page comment-page ${
        isVisible !== undefined && isVisible ? "visible" : "not-visible"
      }`}
    >
      <header className="header">
        <button className="back-button" onClick={() => setIsVisible(false)}>
          <img src={arrowDown} alt="left pointing icon" />
        </button>
      </header>
      <div className="comment-list">{renderComments}</div>
      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          ref={inputRef}
          className="comment-input"
          type="text"
          onInput={e => {
            if (e.currentTarget.value.length > 0) {
              setTextareaHasLength(true);
            } else {
              setTextareaHasLength(false);
            }
          }}
        />
        {textareaHasLength && (
          <button className="submit-comment-button">
            <img src={sendIcon} alt="paper plane icon"></img>
          </button>
        )}
      </form>
    </div>
  );
};

export default CommentPage;
