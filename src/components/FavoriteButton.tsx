import React from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";
import useFavoritesStore from "../store/useFavoritesStore";
import useMoviesStore from "../store/useMoviesStore";

interface FavoriteButtonProps {
  movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { isMovieFavorite, toggleMovieFromFavorites } = useFavoritesStore();
  const { getMovie } = useMoviesStore();

  const isFavorite = isMovieFavorite(movieId);
  const toggleMovie = () => {
    const movie = getMovie(movieId);
    toggleMovieFromFavorites(movie);
  };

  const Icon = isFavorite ? CheckIcon : PlusIcon;

  return (
    <div
      onClick={toggleMovie}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
    </div>
  );
};

export default FavoriteButton;
