import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router";
const NavBar = () => {
  return (
    <div className="flex  border space-x-8 items-center pl-3 py-4 shadow-lg">
      <Link to="/">
        <img className="w-[100px] boredr rounded-full" src={Logo} />
      </Link>

      <Link to="/" className=" text-lg font-bold">
        Movies
      </Link>
      <Link to="/WatchList" className="text-blue-800 text-lg font-bold">
        WatchList
      </Link>
    </div>
  );
};

export default NavBar;
