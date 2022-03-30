import React from "react";
import video from "../data/video.js";
import Iframe from "./Iframe.js";
import Title from "./Title.js";
import Stats from "./Stats.js";
import Votes from "./Votes.js";
import CommentStack from "./CommentStack.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Iframe video={video} />
      <Title videoTitle={video.title} />
      <Stats views={video.views} videoUploadDate={video.createdAt} />
      <Votes upVotes={video.upvotes} downVotes={video.downvotes} />
      <CommentStack comments={video.comments} />
    </div>
  );
}

export default App;
