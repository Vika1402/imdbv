import React from "react";
import { Link } from "react-router";
import DetailsPage from "./DetailsPage";

function MovieCard({
  poster_path,
  name,
  handleAddToWatchList,
  movieObj,
  handleRemovefromWatchList,
  watchList,
}) {
  // console.log({handleAddToWatchList, movieObj });

  function doesContent(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <Link
      to={`/details/${movieObj.id}`} state={{ movie: movieObj }}
      className="h-[36vh] w-[200px] bg-no-repeat bg-center mb-4  bg-cover rounded-xl hover:cursor-pointer hover:scale-105 duration-100 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContent(movieObj) ? (
        <div
          onClick={() => handleRemovefromWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10084;
        </div>
      )}

      <p className="text-white py-3 w-full text-xl text-center bg-black/35">
        {name}
      </p>
    </Link>
  );
}

export default MovieCard;
