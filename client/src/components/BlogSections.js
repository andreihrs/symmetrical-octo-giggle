import React from "react";
import "../styles/main.css";

const BlogSections = () => {
  return (
    <div className="bg-white pt-16 pb-10 px-4 sm:px-6 lg:pt-24 lg:pb-15 lg:px-8">
      <div className="relative mx-auto lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Recent publications
          </h2>
          <p className="mt-3 text-xl text-gray-600 leading-7 sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </div>
        <div className="mt-12 pt-12 border-t-2 border-gray-100 grid gap-16 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12">
          <div>
            <a href="#" className="inline-block">
              <span className="inline-flex items-center bg-indigo-100 py-1/2 px-3 rounded-full text-indigo-800 text-sm font-medium leading-5 ">
                Article
              </span>
            </a>
            <a href="#" className="block">
              <h4 className="mt-3 text-2xl font-bold text-gray-900 leading-8">
                Boost your conversion rate
              </h4>
              <p className="mt-3 text-base leading-6 text-gray-600">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
            </a>
            <div className="flex mt-6 items-center">
              <div className="flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="rounded-full h-10 w-10"
                />
              </div>
              <div className="ml-3">
                <p className="text-gray-800 font-medium text-sm leading-5">
                  Roel Aufderhar
                </p>
                <div className="flex text-sm leading-5 text-gray-600">
                  <time datetime="2020-03-10">Mar 10, 2020</time>
                  <span className="mx-1">&middot;</span>
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center bg-red-100 py-1/2 px-3 rounded-full text-red-800 text-sm font-medium leading-5 ">
              Video
            </span>
            <h4 className="mt-3 text-2xl font-bold text-gray-900 leading-8">
              How to use org charts to find talent
            </h4>
            <p className="mt-3 text-base leading-6 text-gray-600">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
              massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <img
                  alt="Paul York"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800 leading-5">
                  Paul York
                </p>
                <div className="flex text-sm text-gray-600">
                  <time datetime="2020-04-01">Apr 1, 2020</time>
                  <span className="mx-1">&middot;</span>
                  <span>10 min read</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center bg-green-100 py-1/2 px-3 rounded-full text-green-800 text-sm font-medium leading-5 ">
              Case Study
            </span>
            <h4 className="mt-3 text-2xl font-bold text-gray-900 leading-8">
              Improve your customer experience
            </h4>
            <p className="mt-3 text-base leading-6 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure
              iusto fugiat commodi sequi.
            </p>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <img
                  alt="Paul York"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-800 leading-5">
                  Paul York
                </p>
                <div className="flex text-sm text-gray-600">
                  <time datetime="2020-04-01">Apr 1, 2020</time>
                  <span className="mx-1">&middot;</span>
                  <span>10 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSections;
