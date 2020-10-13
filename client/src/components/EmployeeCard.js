import React from "react";
import "../styles/main.css";

const EmployeeCard = ({ position, selected }) => {
  return (
    <div
      className="w-full flex items-center justify-start p-4 space-x-4"
      onClick={(e) => selected(position)}
    >
      <img
        className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
        alt=""
      />
      <div className="flex-1 truncate ">
        <div className="flex items-center space-x-3">
          <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
            Jane Cooper
          </h3>
          <span className="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
            <div className="flex flex-row items-center space-x-4">
              12
              <svg
                width="12"
                height="12"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929C3.68342 9.90237 4.31658 9.90237 4.70711 10.2929L9 14.5858L9 3C9 2.44772 9.44772 2 10 2C10.5523 2 11 2.44772 11 3L11 14.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929Z"
                  fill="test.com4A5568"
                />
              </svg>
            </div>
          </span>
        </div>
        <p className="mt-1 text-gray-500 text-sm leading-5 truncate">
          {position ? position : "Regional Paradigm Technician"}
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
