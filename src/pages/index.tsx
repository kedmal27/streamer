"use client";
import { useVideos } from "../hooks/useVideos";
import "video.js/dist/video-js.css";
import { VideoPlayer } from "@/Components/VideoPlayer";
import { VideoList } from "@/Components/VideoList";
import { useState } from "react";

let play = {
  fill: true,
  fluid: true,
  autoplay: false,
  controls: true,
  preload: "metadata",
  sources: [
    {
      // While API is down
      // src: "https://kyrancodes.app/video/6cf10945-8c9b-49e0-9a0c-cc3ba3e3a74c/6cf10945-8c9b-49e0-9a0c-cc3ba3e3a74c.m3u8",
      // type: "application/x-mpegURL",
      src: "//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4",
    },
  ],
};

export default function Home() {
  const { videos } = useVideos();
  const [newVideo, setNewVideo] = useState("");

  return (
    <div>
      <header>Streamer</header>
      <div className="videoContainer">
        <VideoPlayer {...play} />
      </div>
      <VideoList videoList={videos} setVideo={setNewVideo} />
    </div>
  );
}
