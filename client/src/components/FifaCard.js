import React from "react";
import avatar from "../assets/avatar.svg";
import "../styles/main.css";

const FifaCard = ({ name, title, handleClick }) => {
  return (
    <div
      className="flex justify-start items-center border p-4 h-32 border-gray-300 hover:bg-indigo-400 focus:outline-none focus:shadow-outline active:bg-indigo-600 transition ease-in-out duration-150 hover:text-white"
      onClick={() => handleClick(name, title)}
    >
      <img className="h-20 w-20" src={avatar} alt="" />
      <div className="flex flex-col justify-center ml-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default FifaCard;
