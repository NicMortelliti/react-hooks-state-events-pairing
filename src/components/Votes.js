import React, { useState } from "react";

function Votes({ upVotes, downVotes }) {
  const [upVoteState, setUpVoteState] = useState(upVotes);
  const [downVoteState, setDownVoteState] = useState(downVotes);

  function handleUpVote() {
    const newUpVote = upVoteState + 1;
    setUpVoteState(newUpVote);
  }

  function handleDownVote() {
    const newDownVote = downVoteState - 1;
    setDownVoteState(newDownVote);
  }

  return (
    <div>
      <button onClick={handleUpVote}>{upVoteState} 👍</button>
      <button onClick={handleDownVote}>{downVoteState} 👎</button>
    </div>
  );
}

export default Votes;
