import { useContext } from "react";
import { MovieListContext } from "../contexts/MovieListContext";

export const Navbar = () => {
  const [movies, setMovies] = useContext(MovieListContext);
  return (
    <div>
      <h3>Navbar - Number Of Movies: {movies.length} </h3>
    </div>
  );
};
