import { useState, createContext } from "react";

export const MovieListContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "The Prestige",
      price: "$10",
      id: 23124,
    },
    {
      name: "Batman - Dark Knight",
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
    <MovieListContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieListContext.Provider>
  );
};
