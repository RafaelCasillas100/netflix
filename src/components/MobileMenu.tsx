import React from "react";
import { MAIN_MOVIE_DIV_ID, MY_LIST_DIV_ID } from "../constants";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) return null;

  const scrollIntoView = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div
          className="px-3 text-white hover:underline"
          onClick={() => scrollIntoView(MAIN_MOVIE_DIV_ID)}
        >
          Home
        </div>
        <div
          className="px-3 text-white hover:underline"
          onClick={() => scrollIntoView(MY_LIST_DIV_ID)}
        >
          My List
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
