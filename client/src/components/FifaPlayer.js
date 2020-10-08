import React from "react";
import "../styles/main.css";
import avatar from "../assets/avatar.svg";
import FifaPlayers from "./FifaPlayers";
import { Link } from "react-router-dom";

const FifaPlayer = ({ name, title }) => {
  return (
    // <Link to={`user/${}`}
    <div className="space-y-4">
      <img
        className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24"
        src={avatar}
        alt=""
      />
      <div className="space-y-2">
        <div className="text-xs leading-4 font-medium lg:text-sm lg:leading-5">
          <h4>{name}</h4>
          <p className="text-indigo-600">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FifaPlayer;
