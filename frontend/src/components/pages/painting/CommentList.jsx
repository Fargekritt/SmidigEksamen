import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  const renderComments = comments.map((comment, i) => {
    if (comments.length > 0 && i < 2) {
      return (
        <CommentItem key={comment.id} text={comment.text} date={comment.date} />
      );
    }
  });

  const renderViewMoreText = () => {
    if (comments.length > 0) {
      return `Vis ${comments.length} ${
        comments.length > 1 ? "kommentarer" : "kommentar"
      }`;
    } else {
      return "Legg igjen en kommentar";
    }
  };

  return (
    <div className="comment-list">
      {comments.length < 1 ? (
        <p className="no-comments">Det er ingen kommentarer enda</p>
      ) : (
        ""
      )}
      {renderComments}

      <p className="view-more-comments">{renderViewMoreText()}</p>
    </div>
  );
};

export default CommentList;
