import { DraftModeProvider } from "next/dist/server/async-storage/draft-mode-provider";
import { useState } from "react";
import styled from "styled-components";

// Test data

const videoList = [
  { title: "Movie1" },
  { title: "Movie2" },
  { title: "Movie3" },
  { title: "Movie4" },
  { title: "Movie5" },
  { title: "Movie6" },
  { title: "Movie7" },
  { title: "Movie8" },
];

// Styles

const StyledVideoBox = styled.li`
  border: 1px solid black;
  list-style: none;
  height: 200px;
`;

const StyledVideoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px 20px;
  padding: 20px;
`;

// Main

export default function Home() {
  return <VideoList videos={videoList} />;
}

// Components

//to re-define from any!!!
function VideoList({ videos }: any) {
  return (
    <StyledVideoList>
      {videos.map((movie: any, i: any) => (
        <Video movie={movie} key={i} />
      ))}
    </StyledVideoList>
  );
}

//to re-define from any!!!
function Video({ movie }: any) {
  return <StyledVideoBox>{movie.title}</StyledVideoBox>;
}
