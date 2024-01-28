import React, { useCallback, useMemo } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import PlayButton from "../components/PlayButton";
import useInfoModalStore from "../store/useInfoModalStore";
import useMoviesStore from "../store/useMoviesStore";
import { MAIN_MOVIE_DIV_ID } from "../constants";

const MainMovie: React.FC = () => {
  const { getRandomMovie } = useMoviesStore();
  const { openModal } = useInfoModalStore();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const movie = useMemo(getRandomMovie, []);

  const handleOpenModal = useCallback(() => {
    openModal(movie?.id);
  }, [openModal, movie?.id]);

  return (
    <div
      id={MAIN_MOVIE_DIV_ID}
      className="relative h-[50vh] md:h-[60vw] lg:h-[50vw]"
    >
      <video
        poster={movie.thumbnailUrl}
        className="w-full h-[50vh] md:h-[60vw] lg:h-[50vw] object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
        src={movie.videoUrl}
      />
      <div className="absolute top-[30%] md:top-[35%] lg:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl lg:text-6xl h-full w-[50%] font-bold drop-shadow-xl">
          {movie.title}
        </p>
        <p className="text-white text-md md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {movie.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={movie.id} />
          <button
            onClick={handleOpenModal}
            className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
          >
            <InformationCircleIcon className="w-4 md:w-7 mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainMovie;
