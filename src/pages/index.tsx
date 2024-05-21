"use client";
import { useEffect, useState } from "react";
import { Video, useVideos } from "../hooks/useVideos";

// TYPES

type VideoListProps = { videoList: Video[] };

type PlayerProps = {
  source: string;
  controls?: boolean;
  autoPlay?: boolean;
};

// MAIN

export default function Home() {
  const { videos } = useVideos();

  return (
    <div>
      <header>Streamer</header>
      <Player source={""} />
      <VideoList videoList={videos} />
    </div>
  );
}

// COMPONENTS

const Player = ({ source, controls = true, autoPlay = true }: PlayerProps) => {
  return (
    <video controls={controls} autoPlay={autoPlay} preload="auto">
      <source src={source} type="application/x-mpegURL" />
    </video>
  );
};

// Video Cards List
const VideoList = ({ videoList }: VideoListProps) => {
  console.log(videoList);
  return (
    <ul className="videoList">
      {videoList.map((video, i) => (
        <VideoCard video={video} key={i} />
      ))}
    </ul>
  );
};

const VideoCard = ({ video }: { video: Video }) => {
  return (
    <li className="videoCard">
      <strong className="videoTitle">{video.title}</strong>
      <PlayButton />
    </li>
  );
};

const PlayButton = () => {
  return <button className="playButton"></button>;
};
// ---------------------------
