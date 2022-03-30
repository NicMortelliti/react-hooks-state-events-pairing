import React from "react";
import Comment from "./Comment.js";

function CommentStack({ comments }) {
  const commentsArray = comments.map(comment => {
    return (
      <div key={comment.id}>
        <Comment user={comment.user} text={comment.comment} />
      </div>
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
