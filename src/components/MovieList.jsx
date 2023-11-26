import { useState } from "react";
import { Movie } from "./Movie";

export const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "The Prestige",
      price: "$10",
      id: 23124,
    },
    {
      name: "Batman - The Dark Knight",
      price: "$10",
      id: 2566124,
    },
    {
      name: "Inception",
      price: "$10",
      id: 23524,
    },
  ]);
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price} />
      ))}
    </div>
  );
};
