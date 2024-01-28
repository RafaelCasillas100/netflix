import { Movie } from "../types/Movie";
import { create } from "zustand";

interface FavoritesStoreInterface {
  favoriteMovies: Movie[];
  isMovieFavorite: (movieId: string) => boolean;
  toggleMovieFromFavorites: (movie: Movie) => void;
  fetchFavoriteMoviesFromSessionStorage: () => void;
}

const isMovieFavorite = (
  movieId: string,
  get: () => FavoritesStoreInterface
) => {
  const { favoriteMovies } = get();
  return !!favoriteMovies.find((movie) => movie.id === movieId);
};

const fetchFavoriteMoviesFromSessionStorage = (set: (state: any) => void) => {
  const sessionFavoriteMovies = sessionStorage.getItem("favoriteMovies");
  if (sessionFavoriteMovies)
    set({ favoriteMovies: JSON.parse(sessionFavoriteMovies) });
};

const storeInSessionStorage = (moviesArray: Movie[]) => {
  sessionStorage.setItem("favoriteMovies", JSON.stringify(moviesArray));
};

const toggleMovieFromFavorites = (
  movie: Movie,
  get: () => FavoritesStoreInterface,
  set: (state: any) => void
) => {
  const { favoriteMovies } = get();

  const removeMovie = () => {
    const newFavoriteMovies = favoriteMovies.filter(
      (favMovie) => favMovie.id !== movie.id
    );
    set({ favoriteMovies: newFavoriteMovies });
    storeInSessionStorage(newFavoriteMovies);
  };

  const addMovie = () => {
    const newFavoriteMovies = [...favoriteMovies];
    newFavoriteMovies.push(movie);
    set({ favoriteMovies: newFavoriteMovies });
    storeInSessionStorage(newFavoriteMovies);
  };

  const isFavorite = isMovieFavorite(movie.id, get);
  if (isFavorite) removeMovie();
  else addMovie();
};

const useFavoritesStore = create<FavoritesStoreInterface>((set, get) => ({
  favoriteMovies: [],
  isMovieFavorite: (movieId) => isMovieFavorite(movieId, get),
  toggleMovieFromFavorites: (movie) =>
    toggleMovieFromFavorites(movie, get, set as (state: any) => void),
  fetchFavoriteMoviesFromSessionStorage: () =>
    fetchFavoriteMoviesFromSessionStorage(set as (state: any) => void),
}));

export default useFavoritesStore;
