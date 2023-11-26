import background from "../assets/images/background.jpg";
import back from "../assets/images/back.webp";
import "./home.css";
import { Movies } from "../movies/movies";
import { useState } from "react";

const Home = () => {
  return (
    <>
      <div
        className="flex flex-wrap w-full h-screen content-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className="flex-col md:flex-1 text-start ms-5">
          <h1 className="md:text-5xl text-3xl home-text mb-10 font-bold">
            Choose your next favorite movie wisely
          </h1>
          <h3 className="text-2xl tagline">Learn More About Any Movie ▶️</h3>
        </div>
      </div>
      <div
        className="md:hidden"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <Movies />
    </>
  );
};

export default Home;
