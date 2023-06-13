import { useState } from "react";
import heartIconOutlined from "../../../assets/icons/heart-outline.svg";
import heartIconFilled from "../../../assets/icons/heart.svg";

const CommentItem = ({ text, date, likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = new Date(date).toLocaleDateString("nb-NO", dateOptions);

  return (
    <div className="comment">
      <p className="text">{text}</p>

      <div className="details-wrapper">
        {likes && (
          <div className="likes-wrapper">
            <button
              className="likes-button"
              onClick={() => setIsLiked(!isLiked)}
            >
              <img
                src={isLiked ? heartIconFilled : heartIconOutlined}
                alt="heart icon"
              />
            </button>
            <p className="likes">{isLiked ? likes + 1 : likes}</p>
          </div>
        )}
        <p className="date">{dateString}</p>
      </div>
    </div>
  );
};

export default CommentItem;
