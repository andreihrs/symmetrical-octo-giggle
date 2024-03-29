import React from "react";
import "../styles/main.css";
import FifaPlayer from "./FifaPlayer";
import { Link } from "react-router-dom";
import SearchBar from "../utils/SearchBar";
import FifaHeader from "./FifaPlayersHeader";

const FifaPlayers = ({ employees, company, history }) => {
  return (
    <div className="bg-white sm:px-20 sm:py-16 p-12">
      <div className="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <p className="text-xl leading-7 text-gray-500">
              {company} is a software company built in XYZT
            </p>
          </div>
          <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
            {employees.map((employee) => (
              <li key={employee.id}>
                <Link to={`/user/${employee.id}`}>
                  <FifaPlayer
                    name={employee.name}
                    title={employee.title}
                    onClick={() => history.goBack()}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FifaPlayers;
