const CommentItem = ({ text, date }) => {
  return (
    <div className="comment">
      <p className="text">{text}</p>
      <p className="date">{date}</p>
    </div>
  );
};

export default CommentItem;
