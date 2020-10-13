import React from "react";
import "../styles/main.css";

const EmployeesPreview = (props) => {
  return (
    <div className="md:col-span-3 md:col-start-3 w-full flex justify-between mt-4 sm:mt-0">
      <div className="self-center px-6">
        <p>See all 12 {props.section} at DuckDuckGo</p>
      </div>
      <div className="flex">
        <div className="flex overflow-hidden">
          <img
            className="inline-block h-8 w-8 rounded-full text-white shadow-solid"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="-ml-1 inline-block h-8 w-8 rounded-full text-white shadow-solid"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="-ml-1 inline-block h-8 w-8 rounded-full text-white shadow-solid"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="-ml-1 inline-block h-8 w-8 rounded-full text-white shadow-solid"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <div className="ml-5 flex-shrink-0">
          <svg
            className="h-6 w-6 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={props.onClick}
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default EmployeesPreview;
