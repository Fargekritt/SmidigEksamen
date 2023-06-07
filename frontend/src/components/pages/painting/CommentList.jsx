import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  const renderComments = comments.map((comment, i) => {
    if (i < 2) {
      return (
        <CommentItem key={comment.id} text={comment.text} date={comment.date} />
      );
    }
  });

  return (
    <div className="comment-list">
      {renderComments}

      {comments.length > 3 && <p>Les alle {comments.length} kommentarer </p>}
    </div>
  );
};

export default CommentList;
