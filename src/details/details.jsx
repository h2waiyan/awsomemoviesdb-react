import React from "react";
import axios from "axios";
import Constant from "../constant";
import { Cast } from "./card.jsx";

import { useEffect, useState } from "react";
export const DetailsPage = () => {
  const [details, setDetails] = useState({});
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${Constant.API_URL}/movie/278/credits?api_key=${Constant.API_KEY}&language=en-US&page=1`
      )
      .then(function (response) {
        console.log(response.data);
        // handle success
        setCasts(response.data["cast"]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `${Constant.API_URL}/movie/278?api_key=${Constant.API_KEY}&language=en-US&page=1`
      )
      .then(function (response) {
        console.log(response.data);
        setDetails(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${details["backdrop_path"]}`}
          alt=""
          className="h-screen w-screen object-cover"
        />

        <h1 className="absolute top-40 left-10 text-5xl font-bold text-white outerglow">
          {details["title"]}
        </h1>
        <p className="absolute top-80 left-10 text-2xl text-shadow shadow-red-500">
          {details["overview"]}
        </p>
      </div>

      {casts == [] ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-nowrap overflow-x-scroll scrollbar-hide">
          {casts.map((cast) => {
            return <Cast key={cast.id} casts={cast}></Cast>;
          })}
        </div>
      )}
    </>
  );
};
