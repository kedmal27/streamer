// Test data

const movieList: Movie[] = [
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

type Movie = {
  title: string;
};

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

function MovieList({ movieList }: { movieList: Movie[] }) {
  return (
    <ul className="movieList">
      {movieList.map((movie, i) => (
        <Movie movie={movie} key={i} />
      ))}
    </ul>
  );
}

function Movie({ movie }: { movie: Movie }) {
  return (
    <li className="movieCard">
      <strong className="movieTitle">{movie.title}</strong>
      <PlayButton />
    </li>
  );
}

function PlayButton() {
  return <button className="playButton"></button>;
}
