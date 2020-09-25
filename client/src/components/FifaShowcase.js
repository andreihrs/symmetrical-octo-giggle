import React from "react";
import "../styles/main.css";

const FifaShowcase = () => {
  return (
    <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div className="relative">
        <div className="absolute inset-0 h-3/4 bg-gray-900"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                <div>
                  <h3
                    className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                    id="tier-standard"
                  >
                    Standard
                  </h3>
                </div>
                <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                  $49
                  <span className="ml-1 text-2xl leading-8 font-medium text-gray-500">
                    /mo
                  </span>
                </div>
                <p className="mt-5 text-lg leading-7 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-white">
                <div>
                  <h3 className="inline-flex rounded-full px-2 py-1 text-indigo-600 bg-indigo-100">
                    Enterprise
                  </h3>
                </div>
                <div className="flex items-baseline text-4xl">
                  $150
                  <span className="ml-1 text-xl">/mo</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <div>
                  <a href="#">Get Started</a>
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
