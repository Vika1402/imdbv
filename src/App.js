import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Route, Routes } from "react-router";
import Banner from "./components/Banner";
import DetailsPage from "./components/DetailsPage";
function App() {
  const [watchList, setWatchList] = useState([]);
  const handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    setWatchList(newWatchList);
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    console.log(newWatchList);
  };

  const handleRemovefromWatchList = (movieObj) => {
    let filterdWatchlist = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchList(filterdWatchlist);
    console.log(filterdWatchlist);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchList={watchList}
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemovefromWatchList={handleRemovefromWatchList}
                />
              </>
            }
          />
          <Route
            path="/WatchList"
            element={
              <WatchList setWatchList={setWatchList} watchList={watchList} handleRemovefromWatchList={handleRemovefromWatchList} />
            }
          />
          <Route path="/details/:id" element={<DetailsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
