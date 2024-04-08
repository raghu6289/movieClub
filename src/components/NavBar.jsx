import React from "react";
import logo from "../assets/movie-logo.png";
import logo2 from "../assets/logo1.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img src={logo2} alt="logo" className="w-[50px]" />
      <Link to="/" className="text-blue-500 text-3xl font-bold">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-3xl font-bold">
        WatchList
      </Link>
    </div>
  );
};

export default NavBar;
