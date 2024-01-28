import React from "react";

interface NavbarItemProps {
  label: string;
  active?: boolean;
  elementId: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  label,
  active,
  elementId,
}) => {
  const scrollIntoView = () => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={
        active
          ? "text-white cursor-default"
          : "text-gray-200 hover:text-gray-300 cursor-pointer transition"
      }
      onClick={scrollIntoView}
    >
      {label}
    </div>
  );
};

export default NavbarItem;
