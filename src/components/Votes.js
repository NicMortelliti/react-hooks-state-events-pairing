import React from "react";

function Votes({ upVotes, downVotes }) {
  return (
    <div>
      <button>{upVotes} 👍</button>
      <button>{downVotes} 👎</button>
    </div>
  );
}

export default Votes;
