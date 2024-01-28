import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate, useParams } from "react-router-dom";
import useMoviesStore from "../store/useMoviesStore";
import { ROUTES } from "../constants";

const WatchMovie: React.FC = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { getMovie } = useMoviesStore();

  const movie = getMovie(movieId);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <ArrowLeftIcon
          onClick={() => navigate(ROUTES.HOME)}
          className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span> {movie.title}
        </p>
      </nav>
      <video className="h-full w-full" autoPlay controls src={movie.videoUrl} />
    </div>
  );
};

export default WatchMovie;
