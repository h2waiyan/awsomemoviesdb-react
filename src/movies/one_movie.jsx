import { Link } from "react-router-dom";

export const OneMovie = (movie) => {
  return (
    <Link to={`/details/${movie.props.id}`}>
      <div className="flex-shrink-0 w-64 m-2 min-h-[500px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a>
          <img
            className="rounded-t-lg"
            src={`https://image.tmdb.org/t/p/w500${movie.props.poster_path}`}
            alt=""
          />
        </a>
        <div className="p-5">
          <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white line-clamp-2">
            {movie.props.title}
          </h5>
        </div>
      </div>
    </Link>
  );
};
