import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
function DetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const movie = location.state?.movie;

  if (!movie) {
    navigate("/", { replace: true });
    return null;
  }
  return (
    <div>
      <div className="flex justify-center items-center text-3xl mt-2 bg-gray-400">
        Movie Details
      </div>
      <div className="flex row-auto  justify-evenly m-[3rem]">
        <div className="w-[50vh]">
          <img
            className="w-full rounded-lg h-[60vh] shadow-lg "
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        </div>
        <div className="flex  w-full  text-2xl flex-col items-center text-center gap-2">
          <div>
            <h1 className="font-bold text-blue-500">{movie.name}</h1>
          </div>
          <div className="w-[70%]">
            <h1 className="text-center text-orange-500 font-bold">overview</h1>
            {movie.overview}
          </div>
          <div>
            <h1 className="text-center text-orange-500 font-bold">
              vote_average
            </h1>
            {movie.vote_average}
          </div>

          <div>
            <h1 className="text-center text-orange-500 font-bold">
              popularity
            </h1>
            {movie.popularity}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
