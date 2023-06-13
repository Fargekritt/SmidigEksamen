import { useState, useRef } from "react";
import CommentItem from "../painting/CommentItem";
import ApiService from "../../../services/ApiService";
import sendIcon from "../../../assets/icons/paper-plane.svg";
import arrowDown from "../../../assets/icons/arrow-down.svg";
import "./comment-page.scss";

const CommentPage = ({
  paintingName,
  paintingId,
  setComments,
  comments,
  setIsVisible,
}) => {
  const inputRef = useRef();
  const [textareaHasLength, setTextareaHasLength] = useState(false);
  const [animateClosePage, setAnimateClosePage] = useState(false);
  const renderComments = comments.map((comment, i) => {
    return (
      <CommentItem
        key={comment.id}
        text={comment.text}
        date={comment.date}
        likes={comment.likes}
      />
    );
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const dataToSubmit = {
      text: Object.values(e.target)[0].value,
      paintingId: paintingId,
    };

    submitData(dataToSubmit);
  };

  const submitData = async dataToSubmit => {
    console.log(dataToSubmit);
    try {
      const res = await ApiService.postFormData(
        dataToSubmit,
        `comment/new`
      ).then(res => {
        setComments(prevState => [...prevState, res.data]);
        inputRef.current.value = "";
      });
      console.log(res);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      onAnimationEnd={() => {
        if (animateClosePage === true) {
          setIsVisible(false);
        }
      }}
      className={`page comment-page ${
        !animateClosePage ? "visible" : "not-visible"
      }`}
    >
      <header className="header">
        <button
          className="back-button"
          onClick={() => setAnimateClosePage(true)}
        >
          <img src={arrowDown} alt="left pointing arrow icon" />
        </button>
      </header>
      <div className="comment-content-wrapper">
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
            placeholder={`Legg igjen en kommentar om ${paintingName}`}
            maxLength={250}
          />
          {textareaHasLength && (
            <button className="submit-comment-button">
              <img src={sendIcon} alt="paper plane icon"></img>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CommentPage;
