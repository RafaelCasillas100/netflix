import movies from "./movies.json";
import { Movie } from "../types/Movie";

import { create } from "zustand";

interface MoviesStoreInterface {
  moviesList: Movie[];
  getMovie: (movieId: string | undefined) => Movie;
  getRandomMovie: () => Movie;
}

const getMovie = (
  movieId: string | undefined,
  get: () => MoviesStoreInterface
): Movie => {
  const { moviesList } = get();
  return moviesList.find((movie) => movie.id === movieId) || moviesList[0];
};

const getRandomMovie = (get: () => MoviesStoreInterface): Movie => {
  const { moviesList } = get();
  const randomIdx = Math.floor(Math.random() * moviesList.length);
  return moviesList[randomIdx];
};

const useMoviesStore = create<MoviesStoreInterface>((_, get) => ({
  moviesList: movies,
  getMovie: (movieId) => getMovie(movieId, get),
  getRandomMovie: () => getRandomMovie(get),
}));

export default useMoviesStore;
