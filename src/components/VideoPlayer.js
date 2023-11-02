import React, { useRef, useEffect } from "react";

const VideoPlayer = (props) => {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

  return (
    <video
      autoPlay
      muted
      playsInline
      ref={videoRef}
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      <source src={props.videoSource} type="video/mp4" />
      {/* You can add more source elements for different video formats if needed */}
    </video>
  );
};

export default VideoPlayer;
