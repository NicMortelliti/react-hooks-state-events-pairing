import React, { useState } from "react";
import video from "../data/video.js";
import Iframe from "./Iframe.js";
import Title from "./Title.js";
import Stats from "./Stats.js";
import Votes from "./Votes.js";
import CommentStack from "./CommentStack.js";

function App() {
  console.log("Here's your data:", video);

  // Set up states
  const [viewsState, setViewsState] = useState(video.views);
  const [commentsArrayState, setCommentsArrayState] = useState(video.comments);

  return (
    <div className="App">
      <Iframe video={video} />
      <Title videoTitle={video.title} />
      <Stats views={viewsState} videoUploadDate={video.createdAt} />
      <Votes upVotes={video.upvotes} downVotes={video.downvotes} />
      <CommentStack comments={commentsArrayState} />
    </div>
  );
}

export default App;
