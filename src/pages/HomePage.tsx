import { useEffect } from "react";
import Navbar from "../components/Navbar";
import MainMovie from "../components/MainMovie";
import MovieList from "../components/MovieList";
import InfoModal from "../components/InfoModal";
import useInfoModalStore from "../store/useInfoModalStore";
import useFavoritesStore from "../store/useFavoritesStore";
import useMoviesStore from "../store/useMoviesStore";

const HomePage = () => {
  const { moviesList } = useMoviesStore();
  const { favoriteMovies, fetchFavoriteMoviesFromSessionStorage } =
    useFavoritesStore();
  const { isOpen, closeModal } = useInfoModalStore();

  useEffect(fetchFavoriteMoviesFromSessionStorage, [
    fetchFavoriteMoviesFromSessionStorage,
  ]);

  if (!moviesList.length)
    return (
      <div className="text-white mt-5 ml-5 text-2xl">
        <span>Loading...</span>
      </div>
    );

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <MainMovie />
      <div className="pb-40">
        <MovieList title="Trending Now" movies={moviesList} />
        <MovieList title="My List" movies={favoriteMovies} />
      </div>
    </>
  );
};

export default HomePage;
