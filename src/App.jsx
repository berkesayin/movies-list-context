import { MovieList } from "./components/MovieList";
import { Navbar } from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieListContext";
import { AddMovie } from "./components/AddMovie";
import "./App.css";

export const App = () => {
  return (
    <MovieProvider>
      <div className="App">
        <Navbar />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
};
