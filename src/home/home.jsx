import background from "../assets/images/background.jpg";
import bgsmall from "../assets/images/bg-small.jpg";
import "./home.css";
import { Movies } from "../movies/movies";

const Home = () => {
  return (
    <>
      <div
        className="flex flex-wrap w-full h-screen content-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex-col md:flex-1 text-start ms-5">
          <h1 className="md:text-5xl text-3xl home-text mb-10">
            500 Days Of Summer
          </h1>
          <h3 className="text-2xl tagline">Learn More About My Fav Movie ▶️</h3>
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
