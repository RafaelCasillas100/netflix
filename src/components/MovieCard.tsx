import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";

import { Movie } from "../types/Movie";
import FavoriteButton from "../components/FavoriteButton";
import useInfoModalStore from "../store/useInfoModalStore";
import { ROUTES } from "../constants";

interface MovieCardProps {
  movieData: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movieData }) => {
  const navigate = useNavigate();
  const { openModal } = useInfoModalStore();

  const redirectToWatch = useCallback(
    () => navigate(`${ROUTES.WATCH}/${movieData.id}`),
    [navigate, movieData.id]
  );

  const containerHeight = "h-[24vw] md:h-[18vw] lg:h-[12vw]";

  return (
    <div className={`group bg-zinc-900 col-span relative ${containerHeight}`}>
      <img
        onClick={redirectToWatch}
        src={movieData.thumbnailUrl}
        alt="Movie"
        draggable={false}
        className={`cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full ${containerHeight}`}
      />
      <div className=" opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <img
          onClick={redirectToWatch}
          src={movieData.thumbnailUrl}
          alt="Movie"
          draggable={false}
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={redirectToWatch}
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
              <PlayIcon className="text-black w-4 lg:w-6" />
            </div>
            <FavoriteButton movieId={movieData.id} />
            <div
              onClick={() => openModal(movieData?.id)}
              className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
            >
              <ChevronDownIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2023</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">
              {movieData.duration}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
            <p>{movieData.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
