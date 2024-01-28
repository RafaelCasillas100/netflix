import React from "react";

import { Movie } from "../types/Movie";
import MovieCard from "../components/MovieCard";
import { MY_LIST_DIV_ID } from "../constants";

interface MovieListProps {
  movies: Movie[];
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ movies, title }) => {
  return (
    <div id={MY_LIST_DIV_ID} className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movieData={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
