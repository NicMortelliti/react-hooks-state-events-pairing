import React, { useState } from "react";
import Comment from "./Comment.js";

function CommentStack({ comments }) {
  const [hideState, setHideState] = useState(false);

  function handleHide() {
    const newHideState = !hideState;
    setHideState(newHideState);
  }

  const commentsArray = comments.map(comment => {
    return (
      <div key={comment.id}>
        <Comment user={comment.user} text={comment.comment} />
      </div>
    );
  });

  return (
    <div>
      <button onClick={handleHide}>
        {hideState ? "Show Comments" : "Hide Comments"}
      </button>
      <hr />
      {hideState ? null : <h2>{commentsArray.length} Comments</h2>}
      {hideState ? null : commentsArray}
    </div>
  );
}

export default CommentStack;
