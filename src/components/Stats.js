import React from "react";

function Stats({ views, videoUploadDate }) {
  return (
    <p>
      {views} Views | Uploaded {videoUploadDate}
    </p>
  );
}

export default Stats;
