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

// Types
// TODO

// Main

export default function Home() {
  return <VideoList videoList={videoList} />;
}

// Components

//to re-define from any!!!
function VideoList({ videoList }: any) {
  return (
    <ul className="videoList">
      {videoList.map((movie: any, i: any) => (
        <Video movie={movie} key={i} />
      ))}
    </ul>
  );
}

//to re-define from any!!!
function Video({ movie, img }: any) {
  return <li className="videoCard">{movie.title}</li>;
}
