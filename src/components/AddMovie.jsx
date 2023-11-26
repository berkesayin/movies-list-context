import { useState, useContext } from "react";
import { MovieListContext } from "../contexts/MovieListContext";

export const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieListContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  // Submit the form
  const addMovie = (e) => {
    e.preventDefault();
    setMovies((previousMovies) => [
      ...previousMovies,
      { name: name, price: price },
    ]);
  };

  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};
