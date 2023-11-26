import { useState } from "react";

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
        <li>{movie.name}</li>
      ))}
    </div>
  );
};
