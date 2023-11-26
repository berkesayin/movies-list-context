import { MovieList } from "./components/MovieList";
import { Navbar } from "./components/Navbar";
import { MovieProvider } from "./contexts/MovieListContext";
import "./App.css";

export const App = () => {
  return (
    <MovieProvider>
      <div className="App">
        <Navbar />
        <MovieList />
      </div>
    </MovieProvider>
  );
};
