import React from "react";
import Comment from "./Comment.js";

function CommentStack({ comments }) {
  const commentsArray = comments.map(comment => {
    return (
      <Comment key={comment.id} user={comment.user} text={comment.comment} />
    );
  });

  return (
    <div>
      <button>Hide Comments</button>
      <hr />
      <h2>{commentsArray.length} Comments</h2>
      {commentsArray}
    </div>
  );
}

export default CommentStack;
