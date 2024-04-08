// import React, { useState, useEffect } from "react";

// const Banner = () => {
//   const [trending, setTrending] = useState([]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     fetch(
//       "https://api.themoviedb.org/3/trending/movie/day?api_key=e223d6984b3fcea890fb86e11912ae90&language=en-US"
//     )
//       .then((res) => res.json())
//       .then((data) => setTrending(data.results));
//   }, []);

//   const goToNextSlide = () => {
//     setIndex((index + 1) % trending.length);
//   };

//   const goToPrevSlide = () => {
//     setIndex((index - 1 + trending.length) % trending.length);
//   };

//   return (
//     <div className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end relative">
//       {trending.length > 0 && (
//         <>
//           <img
//             src={`https://image.tmdb.org/t/p/w1280/${trending[index].backdrop_path}`}
//             alt={trending[index].title}
//             className="h-[20vh] md:h-[75vh] w-full object-cover bg-center flex items-end relative"
//           />
//           <div className="absolute inset-x-0 bottom-0 flex justify-between p-2 bg-gray-900 bg-opacity-50">
//             <button
//               className="bg-blue-400 w-[9rem] rounded-xl text-white font-bold items-center hover:cursor-pointer mx-2 text-3xl"
//               onClick={goToPrevSlide}
//               disabled={index === 0}
//             >
//               {"<"}
//             </button>
//             <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 font-bold p-4 rounded-xl ">
//               {trending[index].title}
//             </div>
//             <button
//               className="bg-blue-400 w-[9rem] rounded-xl text-white font-bold items-center hover:cursor-pointer mx-2 text-3xl"
//               onClick={goToNextSlide}
//               disabled={index === trending.length - 1}
//             >
//               {">"}
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Banner;

import React, { useState, useEffect } from "react";

const Banner = () => {
  const [trending, setTrending] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=e223d6984b3fcea890fb86e11912ae90&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setTrending(data.results));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % trending.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, trending.length]);

  return (
    <div className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end relative">
      {trending.length > 0 && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${trending[index].backdrop_path}`}
            alt={trending[index].title}
            className="h-[20vh] md:h-[75vh] w-full object-cover bg-center flex items-end relative"
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-between p-2 bg-gray-900 bg-opacity-50">
            <button
              className="bg-blue-400 w-[9rem] rounded-xl text-white font-bold items-center hover:cursor-pointer mx-2 text-3xl"
              onClick={() =>
                setIndex((index - 1 + trending.length) % trending.length)
              }
              disabled={index === 0}
            >
              {"<"}
            </button>
            <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 font-bold p-4 rounded-xl ">
              {trending[index].title}
            </div>
            <button
              className="bg-blue-400 w-[9rem] rounded-xl text-white font-bold items-center hover:cursor-pointer mx-2 text-3xl"
              onClick={() => setIndex((index + 1) % trending.length)}
              disabled={index === trending.length - 1}
            >
              {">"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;
