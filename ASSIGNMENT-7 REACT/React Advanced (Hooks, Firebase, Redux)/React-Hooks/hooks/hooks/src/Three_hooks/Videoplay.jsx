import React, { useEffect, useRef, useState } from "react";

const Videoplayer = ({ src, isPlaying }) => {

  const videoRef = useRef(null);

  console.log(" Videoplayer Rendered");
  console.log(" src:", src);
  console.log(" isPlaying:", isPlaying);
  console.log(" videoRef.current:", videoRef.current);

  
  useEffect(() => {
    console.log("🔄 useEffect: [src] triggered");

    if (videoRef.current) {
      console.log(" Loading new video...");
      videoRef.current.load();
    } else {
      console.log(" videoRef.current is NULL, video not loaded");
    }
  }, [src]);


  useEffect(() => {
    console.log(" useEffect: [isPlaying] triggered");

    if (!videoRef.current) {
      console.log(" videoRef.current missing, cannot play/pause");
      return;
    }

    switch (isPlaying) {
      case true:
        console.log(" Playing video...");
        videoRef.current.play().catch(err => {
          console.log(" Play Error:", err);
        });
        break;

      case false:
        console.log("⏸ Pausing video...");
        videoRef.current.pause();
        break;
    }
  }, [isPlaying]);

  return (
    <>
      <video ref={videoRef} controls width="500">
        <source src={src} />
      </video>
    </>
  );
};


const Videoplay = () => {
  const [url, setUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  console.log(" Videoplay Component Rendered");
  console.log(" Current URL:", url);
  console.log(" isPlaying:", isPlaying);

  return (
    <div>
      <h2>Enter the link and play the video</h2>

      <input
        type="text"
        value={url}
        onChange={(e) => {
          console.log(" Typing URL:", e.target.value);
          setUrl(e.target.value);
        }}
        placeholder="Enter the video url"
        style={{ width: "80%" }}
      />
      <br />
      <br />

      <button
        onClick={() => {
          console.log(" Toggling Play/Pause");
          setIsPlaying((prev) => !prev);
        }}
      >
        {isPlaying ? "pause" : "play"}
      </button>

      {url && (
        <div>
          <Videoplayer src={url} isPlaying={isPlaying} />
        </div>
      )}
    </div>
  );
};

export default Videoplay;
