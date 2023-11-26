import { MovieList } from "./components/MovieList";
import { Navbar } from "./components/Navbar";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MovieList />
    </div>
  );
};
