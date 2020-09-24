import React from "react";
import "../styles/main.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import CompanyPage from "./CompanyPage";

const CompanyCard = ({ company }) => {
  return (
    <div className="relative bg-white my-12 px-8 mx-8 border border-gray-100 shadow-md lg:max-w-xl rounded-md">
      <Link to={`company/${company}`}>
        <h2 className="py-4 my-4 text-3xl font-bold text-blue-800 leading-9">
          {company}
        </h2>
        <img
          src={logo}
          className="absolute top-0 right-0 -my-4 mx-4 h-16 w-16 md:h-24 md:w-24 rounded-full border border-gray-200 z-20 opacity-100 bg-white shadow-md"
          alt=""
        />
      </Link>
      <div className="flex items-center text-sm">
        <div className="flex items-center text-sm text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="currentColor"
          >
            <path
              className="heroicon-ui"
              d="M8 7V5c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h4zm8 2H8v10h8V9zm2 0v10h2V9h-2zM6 9H4v10h2V9zm4-2h4V5h-4v2z"
            />
          </svg>
          <p className="ml-1">Software/IT</p>
        </div>
        <div className="flex items-center ml-4 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="currentColor"
          >
            <path
              className="heroicon-ui"
              d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
            />
          </svg>
          <p className="ml-1">5000+</p>
        </div>
        <div className="flex items-center ml-4 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="currentColor"
          >
            <path
              className="heroicon-ui"
              d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            />
          </svg>
          <p className="ml-1">San Francisco, CA</p>
        </div>
      </div>
      <div className="mt-4 hidden sm:block">
        <div>
          <span className="text-sm font-semibold tracking-tight leading-5">
            About
          </span>
          <p className="text-sm">
            Organize the world's information and make it useful
          </p>
        </div>
        <div className="inline">
          <span className="text-sm font-semibold tracking-tight leading-5">
            Q&A&nbsp;
          </span>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! &nbsp;
            <a href="#" className="text-blue-800">
              Read more...
            </a>
          </p>
        </div>
      </div>
      <fieldset className="pb-4 mt-6 border-t border-gray-200 -mx-8 ">
        <legend className="block mx-auto text-gray-600">
          People who worked here
        </legend>
        <div className="mt-4 pl-2 grid grid-cols-3 gap-3 h-full">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="rounded-full h-10 w-10"
            />
            <div className="ml-3">
              <a href="#" className="text-sm text-blue-800">
                Paul York
              </a>
              <p className="text-sm">Software Engineer</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              className="rounded-full h-10 w-10"
            />
            <div className="ml-3">
              <a href="#" className="text-sm text-blue-800">
                Paul York
              </a>
              <p className="text-sm">Software Engineer</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <a href="#" className="text-sm font-semibold text-blue-800">
              See more
            </a>
          </div>
        </div>
      </fieldset>
    </div>
  );
};
export default CompanyCard;
