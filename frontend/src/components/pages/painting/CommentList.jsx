import CommentItem from "./CommentItem";

const CommentList = ({ comments }) => {
  const renderComments = comments.map((comment, i) => {
    if (comments.length > 0 && i < 2) {
      return (
        <CommentItem key={comment.id} text={comment.text} date={comment.date} />
      );
    }
  });

  return (
    <div className="comment-list">
      {comments.length < 1 ? <p>Det er ingen kommentarer enda</p> : ""}
      {renderComments}
      {comments.length > 2 && <p>Les alle {comments.length} kommentarer </p>}
    </div>
  );
};

export default CommentList;
