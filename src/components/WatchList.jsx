import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import generesId from "../utility/generId";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-regular-svg-icons";

const WatchList = ({ watchlist, setWatchlist, handleRemove }) => {
  const [search, setSearch] = useState("");
  const [genereList, setGenereList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");

  function handleDecending() {
    let sortedList = watchlist.sort((a, b) => a.vote_average - b.vote_average);

    setWatchlist([...sortedList]);
  }

  function handleAcending() {
    let sortedList = watchlist.sort((a, b) => b.vote_average - a.vote_average);
    setWatchlist([...sortedList]);
  }

  useEffect(() => {
    let temp = watchlist.map((movie) => {
      return generesId[movie.genre_ids[0]];
    });
    setGenereList(["All Genres", ...new Set(temp)]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genereList.map((genre, index) => {
          return (
            <div
              key={index}
              onClick={() => setCurrentGenre(genre)}
              className={
                currentGenre == genre
                  ? "flex justify-center bg-blue-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4 hover:cursor-pointer"
                  : "flex justify-center bg-gray-400 h-[3rem] w-[9rem] rounded-xl text-white font-bold items-center mx-4 hover:cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-hidden border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    className="mx-2 text-xl hover:cursor-pointer"
                    icon={faArrowAltCircleUp}
                    onClick={handleAcending}
                  />
                  <div>Rating</div>
                  <FontAwesomeIcon
                    className="mx-2 text-xl hover:cursor-pointer"
                    icon={faArrowAltCircleDown}
                    onClick={handleDecending}
                  />
                </div>
              </th>
              <th>Popularity</th>
              <th>Genere</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movie) => {
                if (currentGenre == "All Genres") {
                  return true;
                } else {
                  return generesId[movie.genre_ids[0]] == currentGenre;
                }
              })
              .filter((data) =>
                data.original_title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase())
              )
              .map((movie, index) => {
                return (
                  <tr className="border-b-2" key={index}>
                    <td className="flex items-center px-6 py-4">
                      <img
                        // src="data:image/jpeg;base64,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"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt=""
                        className="h-[6rem] w-[10rem]"
                      />
                      <div className="mx-10">{movie.original_title}</div>
                    </td>
                    <td>{movie.vote_average}</td>
                    <td>{movie.popularity}</td>
                    <td>{generesId[movie.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemove(movie)}
                      className="text-red-800 hover:cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}

            {/* <tr className="border-b-2">
              <td className="flex items-center px-6 py-4">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                  className="h-[6rem] w-[10rem]"
                />
                <div className="mx-10">The Joker</div>
              </td>
              <td>8.4</td>
              <td>9</td>
              <td>Action</td>
              <td className="text-red-800">Delete</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
