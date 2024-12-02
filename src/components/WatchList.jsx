import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import genreids from "../Utility/genre";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function WatchList({ watchList, setWatchList, handleRemovefromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGen, setCurrentGen] = useState("All Genres");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  let sortIncreasing = () => {
    let sortedList = [...watchList].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList(sortedList);
  };

  let sortDecreasing = () => {
    let sortedList = [...watchList].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList(sortedList);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => genreids[movieObj.genre_ids[0]]);
    setGenreList(["All Genres", ...new Set(temp)]); // Use `Set` to avoid duplicates.
  }, [watchList]);

  function handleFilter(genre) {
    setCurrentGen(genre);
  }

  return (
    <>
      <div className="flex justify-center flex-wrap m-4 gap-4">
        {genreList.map((genre) => (
          <div
            key={genre}
            onClick={() => handleFilter(genre)}
            className={
              currentGen === genre
                ? "p-4 bg-blue-300 rounded-md"
                : "p-4 bg-gray-400 rounded-md"
            }
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          placeholder="Search Movies"
          className="border bg-gray-200 outline-none h-[3rem] w-[18rem] text-xl p-1"
          type="text"
        />
      </div>

      <div className="flex justify-center items-center m-8 rounded-lg overflow-hidden">
        <table className="border w-full text-gray-700 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex items-center justify-center gap-2">
                <div onClick={sortDecreasing} className="cursor-pointer">
                  <FaArrowDown />
                </div>
                Rating
                <div onClick={sortIncreasing} className="cursor-pointer">
                  <FaArrowUp />
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movieObj) => {
                if (currentGen === "All Genres") return true;
                return genreids[movieObj.genre_ids[0]] === currentGen;
              })
              .filter((movieObj) =>
                movieObj.name
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((movieObj) => (
                <tr key={movieObj.id} className="border-b-2">
                  <td className="flex items-center px-6 py-3">
                    <img
                      className="h-[6rem] w-[10rem] rounded-md"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      alt={movieObj.name}
                    />
                    <div className="mx-10">{movieObj.name}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreids[movieObj.genre_ids[0]]}</td>
                  <td
                    onClick={() => handleRemovefromWatchList(movieObj)}
                    className="text-red-800 font-bold cursor-pointer"
                  >
                    Delete
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
