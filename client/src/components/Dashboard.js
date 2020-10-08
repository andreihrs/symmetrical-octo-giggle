import React from "react";
import CompanyCard from "../components/CompanyCard.js";
import SideBar from "../components/SideBar.js";
import Route from "react-router-dom";
import BlogComponents from "./BlogComponents";
import "../styles/main.css";

const Dashboard = () => {
  const companies = ["DuckDuckGo", "LeadIQ", "Thin Air"];
  // React.useEffect(() => {
  //   console.log("COMPONENT DID MOUNT");
  // }, []);

  return (
    <div>
      <SideBar>
        <BlogComponents />
        <CompanyCard company={companies[0]} />
        <CompanyCard company={companies[1]} />
        <CompanyCard company={companies[2]} />
        <div>
          <h2 class="text-gray-500 text-xs font-medium uppercase tracking-wide">
            Pinned Projects
          </h2>
          <ul class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <li class="col-span-1 flex shadow-sm rounded-md">
              <div class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">
                GA
              </div>
              <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                  <a
                    href="#"
                    class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150"
                  >
                    Graph API
                  </a>
                  <p class="text-gray-500">16 Members</p>
                </div>
                <div class="flex-shrink-0 pr-2">
                  <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>

            <li class="col-span-1 flex shadow-sm rounded-md">
              <div class="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm leading-5 font-medium rounded-l-md">
                CD
              </div>
              <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                  <a
                    href="#"
                    class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150"
                  >
                    Component Design
                  </a>
                  <p class="text-gray-500">12 Members</p>
                </div>
                <div class="flex-shrink-0 pr-2">
                  <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>

            <li class="col-span-1 flex shadow-sm rounded-md">
              <div class="flex-shrink-0 flex items-center justify-center w-16 bg-orange-500 text-white text-sm leading-5 font-medium rounded-l-md">
                T
              </div>
              <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                  <a
                    href="#"
                    class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150"
                  >
                    Templates
                  </a>
                  <p class="text-gray-500">16 Members</p>
                </div>
                <div class="flex-shrink-0 pr-2">
                  <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>

            <li class="col-span-1 flex shadow-sm rounded-md">
              <div class="flex-shrink-0 flex items-center justify-center w-16 bg-green-400 text-white text-sm leading-5 font-medium rounded-l-md">
                RC
              </div>
              <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div class="flex-1 px-4 py-2 text-sm leading-5 truncate">
                  <a
                    href="#"
                    class="text-gray-900 font-medium hover:text-gray-600 transition ease-in-out duration-150"
                  >
                    React Components
                  </a>
                  <p class="text-gray-500">8 Members</p>
                </div>
                <div class="flex-shrink-0 pr-2">
                  <button class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition ease-in-out duration-150">
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                      <th class="px-6 py-3 bg-gray-50"></th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 h-10 w-10">
                            <img
                              class="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                              alt=""
                            />
                          </div>
                          <div class="ml-4">
                            <div class="text-sm leading-5 font-medium text-gray-900">
                              Jane Cooper
                            </div>
                            <div class="text-sm leading-5 text-gray-500">
                              jane.cooper@example.com
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <div class="text-sm leading-5 text-gray-900">
                          Regional Paradigm Technician
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          Optimization
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap">
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        Admin
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <a
                          href="#"
                          class="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white">
          <div class="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
            <div class="space-y-12">
              <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
                Meet our leadership
              </h2>

              <ul class="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
                <li>
                  <div class="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
                    <div class="relative h-0 pb-2/3 sm:pt-2/3">
                      <img
                        class="absolute inset-0 object-cover h-full w-full shadow-lg rounded-lg"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>
                    <div class="sm:col-span-2">
                      <div class="space-y-4">
                        <div class="text-lg leading-6 font-medium space-y-1">
                          <h4>Whitney Francis</h4>
                          <p class="text-indigo-600">Copywriter</p>
                        </div>
                        <div class="text-lg leading-7">
                          <p class="text-gray-500">
                            Ultricies massa malesuada viverra cras lobortis.
                            Tempor orci hac ligula dapibus mauris sit ut eu.
                            Eget turpis urna maecenas cras. Nisl dictum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default Dashboard;
