import React from "react";
import "../styles/main.css";
import logo from "../logo.svg";
import canva from "../assets/canva.jpg";

const CompanyProfile = ({ company }) => {
  return (
    <div className="max-w-4xl flex flex-col sm:flex sm:flex-row sm:justify-start px-4 mx-12 my-12 sm:mx-24 bg-white">
      <img
        src={canva}
        className="h-40 w-40 shadow-md self-center sm:mx-8 sm:-mb-8 border border-gray-200"
      />
      <div className="sm:hidden">
        <h2 className="text-2xl font-bold">{company}</h2>
        <select aria-label="Selected tab" className="form-select block w-full">
          <option>Key Executives</option>
          <option>Overview</option>
          <option selected>Team Members</option>
        </select>
      </div>
      <div className="hidden sm:block sm:self-end">
        <h2 className="text-4xl font-bold">{company}</h2>
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <a
              href="#"
              className="group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
            >
              <svg
                className="-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Key Executives</span>
            </a>
            <a
              href="#"
              className="ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
            >
              <svg
                className="-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Overview</span>
            </a>
            <a
              href="#"
              className="ml-8 group inline-flex items-center py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
              aria-current="page"
            >
              <svg
                className="-ml-0.5 mr-2 h-5 w-5 text-indigo-500 group-focus:text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span>Team Members</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
