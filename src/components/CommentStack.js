import React from "react";
import Comment from "./Comment.js";

function CommentStack({ commentsArray }) {
  return (
    <div>
      <button>Hide Comments</button>
      <hr />
      <h2>{commentsArray.length} Comments</h2>
      <Comment />
    </div>
  );
}

export default CommentStack;
