const CommentItem = ({ text, date }) => {
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
      <p className="date">{dateString}</p>
    </div>
  );
};

export default CommentItem;
