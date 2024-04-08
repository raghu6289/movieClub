import { useEffect, useState } from "react";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchList from "./components/WatchList";
import "./App.css";
import Banner from "./components/Banner";

function App() {
  let moviesList = localStorage.getItem("moviesApp");
  const [watchlist, setWatchlist] = useState(JSON.parse(moviesList));

  function handleAdd(movieObj) {
    let newList = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newList));
    setWatchlist(newList);
  }

  function handleRemove(movieObj) {
    let filterList = watchlist.filter((movie) => movie.id != movieObj.id);
    setWatchlist(filterList);
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                watchlist={watchlist}
                setWatchlist={setWatchlist}
                handleRemove={handleRemove}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
