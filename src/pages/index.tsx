// Test data

const movieList = [
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
  return (
    <div>
      <header>Streamer</header>
      <MovieList movieList={movieList} />;
    </div>
  );
}

// Components

//to re-define from any!!!
function MovieList({ movieList }: any) {
  return (
    <ul className="movieList">
      {movieList.map((movie: any, i: any) => (
        <Movie movie={movie} key={i} />
      ))}
    </ul>
  );
}

//to re-define from any!!!
function Movie({ movie, img }: any) {
  return (
    <li className="movieCard">
      <strong className="movieTitle">{movie.title}</strong>
    </li>
  );
}
