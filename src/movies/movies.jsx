import { MovieCard } from "./movie_card";

export const Movies = () => {
  return (
    <div>
      <MovieCard category="now_playing" title="Now Playing Movies"></MovieCard>

      <MovieCard category="popular" title="Popular Movies"></MovieCard>

      <MovieCard category="upcoming" title="Upcoming Movies"></MovieCard>

      <MovieCard category="top_rated" title="Top Rated Movies"></MovieCard>
    </div>
  );
};
