import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Movies = ({ handleAdd, handleRemove, watchlist }) => {
  const [data, setData] = useState([]);
  const [pgNum, setPgNum] = useState(1);

  const buttonStyle = {
    border: "none",
    backgroundColor: "#f44336",
    color: "#fff",
    padding: "15px 32px",
    textAlign: "center",
    fontSize: "16px",
    borderRadius: "15px",
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=e223d6984b3fcea890fb86e11912ae90&language=en-US&page=${pgNum}`
    )
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, [pgNum]);

  return (
    <div className="p-5">
      <div className="text-xl m-5 font-bold text-center">
        Trending Movies
        <div className="flex flex-row flex-wrap justify-around">
          {data.map((item) => {
            return (
              <MovieCard
                poster_path={item.poster_path}
                name={item.original_title}
                key={item.id}
                handleAdd={handleAdd}
                movieObj={item}
                handleRemove={handleRemove}
                watchlist={watchlist}
              />
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontSize: "20px",
            padding: "10px",
          }}
        >
          <button
            onClick={() => setPgNum(pgNum > 1 ? pgNum - 1 : pgNum)}
            style={buttonStyle}
          >
            Prev
          </button>
          {pgNum}
          <button onClick={() => setPgNum(pgNum + 1)} style={buttonStyle}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
