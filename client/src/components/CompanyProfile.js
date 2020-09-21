import React from "react";
import "../styles/main.css";
import logo from "../logo.svg";

const CompanyProfile = () => {
  return (
    <div className="max-w-4xl grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 h-64 md:h-40 border border-gray-100 shadow-sm py-5 my-10 mx-auto">
      <div className="col-span-1 flex justify-center">
        <img src={logo} className="h-32 w-32 border border-gray-200" />
      </div>
      <div className="col-span-2 md:col-span-3 md:mx-0 -ml-4 -mr-8">
        <div className="text-xs">
          <h3 className="text-xl font-bold text-indigo-600">Google Inc.</h3>
          <div className="grid grid-cols-4 gap-2">
            <div className="font-bold text-gray-900">
              Headquarters
              <p className="font-normal text-gray-600">Mountain View, CA</p>
            </div>
            <div className="font-bold text-gray-900">
              Company Size
              <p className="font-normal text-gray-600">10,001+</p>
            </div>
            <div className="font-bold text-gray-900">
              Industry
              <p className="font-normal text-gray-600">Internet</p>
            </div>
            <div className="font-bold text-gray-900">
              Type
              <p className="font-normal text-gray-600">Public Company</p>
            </div>
            <div className="font-bold text-gray-900">
              Founded
              <p className="font-normal text-gray-600">1998</p>
            </div>
            <div className="font-bold text-gray-900">
              Website
              <p className="font-bold text-blue-700">Google</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center ml-5 md:-ml-5 col-span-2 md:col-span-1">
        <button className="bg-green-400 text-white font-medium py-2 px-8 text-sm rounded-md w-full">
          Follow
        </button>
      </div>
    </div>
  );
};

export default CompanyProfile;
