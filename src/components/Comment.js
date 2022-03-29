import React from "react";

function Comment({ key, user, text }) {
  return (
    <div key={key}>
      <h3>{user}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Comment;
