import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({
  handleAddToWatchList,
  handleRemovefromWatchList,
  watchList,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const next = () => {
    setPageNo(pageNo + 1);
  };
  const prev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=eb02868becd126b5e1f9c9e8ead61c6a&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, [pageNo]);
  return (
    <div className="p-5">
      <div className="text-center text-3xl m-5 font-bold mt-2">
        Trending Movies
      </div>
      <div className="flex flex-row  flex-wrap justify-around items-center">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.name}
              handleAddToWatchList={handleAddToWatchList}
              watchList={watchList}
              handleRemovefromWatchList={handleRemovefromWatchList}
            />
          );
        })}

        {/* https://api.themoviedb.org/3/tv/popular?api_key=eb02868becd126b5e1f9c9e8ead61c6a&language=en-US&page=3 */}
      </div>
      <Pagination next={next} prev={prev} pageNo={pageNo} />
    </div>
  );
}

export default Movies;
