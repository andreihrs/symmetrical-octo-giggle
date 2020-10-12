import React from "react";
import "../styles/main.css";

const EmployeeCard = () => {
  return (
    <div className="w-full flex items-center justify-start p-4 space-x-4">
      <img
        class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
        alt=""
      />
      <div className="flex-1 truncate">
        <div className="flex items-center space-x-3">
          <h3 className="text-gray-900 text-sm leading-5 font-medium truncate">
            Jane Cooper
          </h3>
          <span class="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
            Admin
          </span>
        </div>
        <p className="mt-1 text-gray-500 text-sm leading-5 truncate">
          Regional Paradigm Technician
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
