import { useState, useEffect } from "react";
import axios from "axios";
import { OneMovie } from "./one_movie";
import "./movie_card.css";

export const MovieCard = ({ category, title }) => {
  const [movies, setMovies] = useState([]);

  console.log(category, title);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${category}?api_key=050c28541f900007285c3020069bfd62&language=en-US&page=1`
      )
      .then(function (response) {
        // handle success
        setMovies(response.data["results"]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <>
      <h1 className="text-3xl text-start mx-2 my-5">{title}</h1>
      {movies.length == 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex overflow-x-scroll scrollbar-hide">
          {movies.map((movie) => {
            return <OneMovie key={movie.id} props={movie}></OneMovie>;
          })}
        </div>
      )}
    </>
  );
};
