import React, { useState } from "react";
import "../styles/main.css";
import avatar from "../assets/avatar.svg";
import FifaCard from "./FifaCard";

const FifaShowcase = ({ employees }) => {
  const [profile, setProfile] = useState({
    name: "Gabriel Weinberg",
    title: "Founder",
  });
  const handleClick = (name, title) => {
    setProfile({ name, title });
  };

  // TODO: Add array of attributes for each title + scrollbar
  // TODO: Add button to see more details about the profile
  // TODO: Button to load more results
  // TODO: Buttons for different marketing sections
  //TODO: add (i) button to see more info about a player
  //TODO: add more review from team members

  return (
    <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24 cursor-pointer">
      <div className="relative">
        <div className="absolute inset-0 h-3/4 border-gray-900 focus-outline-none"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 focus-outline-none">
          <div className="max-w-md mx-auto space-y-4 lg:max-w-screen-lg lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
            <div className="rounded-lg shadow-lg ">
              <div className="py-8 bg-white sm:pt-0 sm:pb-0 overflow-y-auto">
                <ul className="sm:grid sm:grid-cols-2 sm:gap-0">
                  <li className="col-span-2">
                    <div className="flex justify-between border border-gray-300 px-4 py-4 hover:bg-indigo-400 focus:outline-none focus:shadow-outline active:bg-indigo-600 transition ease-in-out duration-150 hover:text-white">
                      <div className="flex flex-col ml-4">
                        <h3 className="font-bold text-4xl">Gabriel Weinberg</h3>
                        <h3 className="font-semibold text-2xl">Founder</h3>
                      </div>
                      <img className="h-20 w-20" src={avatar} alt="" />
                    </div>
                  </li>
                  {employees.map((employee) => (
                    <li key={employee.id}>
                      <FifaCard
                        name={employee.name}
                        title={employee.title}
                        handleClick={handleClick}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-lg shadow-lg overflow-hidden">
              <div className="bg-white px-6 py-8 sm:p-10 sm:pb-6">
                <div className="flex flex-row justify-around pt-6 pb-4">
                  <img
                    className="h-32 w-32 border-white border-4 rounded-full"
                    src={avatar}
                    alt=""
                  />
                  <div className="flex flex-col ml-2">
                    <h2 className="text-gray-800 text-5xl font-bold">
                      {profile.name}
                    </h2>
                    <h3 className="text-gray-800 tracking-wide text-3xl font-bold ml-1">
                      {profile.title}
                    </h3>
                  </div>
                </div>
                <hr />
                <div className="md:grid md:grid-cols-7 md:gap-5 my-8 py-8">
                  <div className="md:col-span-2 font-semibold flex items-end justify-start text-lg">
                    Decision Making
                  </div>
                  <div className="md:col-span-4 flex items-center justify-center">
                    <div className="w-full bg-gray-200 mt-2 flex flex-row">
                      <div
                        className="bg-teal-500 text-xs leading-none py-1 text-center text-white"
                        style={{ width: "30%" }}
                      ></div>
                      <div
                        className="bg-teal-200 leading-none py-1"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-center items-end">30-55%</div>
                  <div className="md:col-span-2 font-semibold flex items-center justify-start text-lg">
                    Integrity
                  </div>
                  <div className="md:col-span-4">
                    <div className="w-full bg-gray-200 mt-2 flex flex-row">
                      <div
                        className="bg-teal-500 text-xs leading-none py-1 text-center text-white"
                        style={{ width: "55%" }}
                      ></div>
                      <div
                        className="bg-teal-200 leading-none py-1"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">55-70%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifaShowcase;
