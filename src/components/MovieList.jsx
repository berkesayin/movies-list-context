import { Movie } from "./Movie";
import { useContext } from "react";
import { MovieListContext } from "../contexts/MovieListContext";

export const MovieList = () => {
  const [movies, setMovies] = useContext(MovieListContext);

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price} />
      ))}
    </div>
  );
};
