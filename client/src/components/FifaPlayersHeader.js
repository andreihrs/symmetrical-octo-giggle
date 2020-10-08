import React from "react";
import "../styles/main.css";

const FifaHeader = () => {
  return (
    <div
      id="search-functions"
      className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-12"
    >
      <h2 className="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
        People
      </h2>
      <div className="w-full block">
        <div className="w-full border-b border-gray-300">
          <nav className="flex justify-center sm:justify-start -mb-px">
            <a
              href="#"
              className="whitespace-no-wrap py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
            >
              All
            </a>
            <a
              href="#"
              className="whitespace-no-wrap py-4 px-1 ml-8 border-b-2 border-transparent font-bold text-sm leading-5 border-indigo-500 text-indigo-600 foucs:outline-none foucs:text-indigo-800 focus:border-indigo-700"
              aria-current="page"
            >
              Org Chart
            </a>
          </nav>
        </div>
        <div className="mt-8 sm:-mt-12 flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
          <div className="max-w-lg w-full lg:max-w-xs">
            <label for="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifaHeader;
