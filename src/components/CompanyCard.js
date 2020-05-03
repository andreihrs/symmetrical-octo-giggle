import React from 'react'
import '../styles/main.css'
import logo from '../logo.svg'

const CompanyCard = () => {
  return (
    <div class="relative bg-white my-12 px-8 mx-8 border border-gray-100 shadow-md max-w-sm lg:max-w-xl w-full rounded-md">
      <h2 class="py-4 my-4 text-3xl font-bold text-blue-800 leading-9">
        Google
      </h2>
      <img src={logo} class="absolute top-0 right-0 -my-4 mx-4 h-24 w-24 rounded-full border border-gray-200 z-20 opacity-100 bg-white shadow-md  " />
      <div class="flex items-center">
        <div class="flex items-center text-sm text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  class="h-6 w-6" fill="currentColor">
            <path class="heroicon-ui" d="M8 7V5c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h4zm8 2H8v10h8V9zm2 0v10h2V9h-2zM6 9H4v10h2V9zm4-2h4V5h-4v2z"/>
          </svg>
          <p class="ml-1">
            Software/IT
          </p>
        </div>
        <div class="flex items-center ml-4 text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
          <path class="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/>
        </svg>
        <p class="ml-1">
          5000+
        </p>
        </div>
        <div class="flex items-center ml-4 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6" fill="currentColor">
            <path class="heroicon-ui" d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
          </svg>
          <p class="ml-1">
            San Francisco, CA
          </p>
        </div> 
      </div>
      <div class="mt-4 hidden sm:block">
        <div>
          <span class="text-sm font-semibold tracking-tight leading-5">
            About
          </span>
          <p class="text-sm">
            Organize the world's information and make it useful
          </p>
        </div>
        <div class="inline">
          <span class="text-sm font-semibold tracking-tight leading-5">
            Q&A&nbsp;
          </span>
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! &nbsp; 
            <a href="#" class="text-blue-800">
              Read more...
            </a>
          </p>
        </div>
      </div>
      <fieldset class="pb-4 mt-6 border-t border-gray-200 -mx-8 ">
        <legend class="block mx-auto text-gray-600">
          People who worked here
        </legend>
        <div class="mt-4 pl-2 grid grid-cols-3 gap-3 h-full">
          <div class="flex items-center">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="rounded-full h-10 w-10"/>
            <div class="ml-3">
              <a href="#" class="text-sm text-blue-800">
                Paul York
              </a>
              <p class="text-sm">
                Software Engineer
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="rounded-full h-10 w-10"/>
            <div class="ml-3">
              <a href="#" class="text-sm text-blue-800">
                Paul York
              </a>
              <p class="text-sm">
                Software Engineer
              </p>
            </div>
          </div>
          <div class="flex items-center justify-center h-full">
            <p class="text-sm font-semibold text-blue-800">
              See more
            </p>
          </div>
        </div>
      </fieldset>
    </div>
  )
}
export default CompanyCard;