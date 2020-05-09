import React from 'react'
import '../styles/main.css'

const SideProfile = () => {
  return (
    <div class="absolute flex flex-col w-64 inset-y-0 right-0">
      <div class="relative w-full text-gray-400 focus-within:text-gray-600">
        <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-1">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
        </div>
        <input id="search_field" class="block w-full h-full pl-8 pr-3 py-2 rounded-xs text-gray-900 placeholder-gray-500 border focus:outline-none focus:placeholder-gray-400 sm:text-sm" placeholder="Search" type="search" />
      </div>
      <div class="mt-5 flex px-4">
        <div class="mr-5">
          <h4 class="text-xl font-medium tracking-tight leading-7">
            Janet Perkins
          </h4>
          <p class="text-sm font-medium text-gray-500">
            Software Developer
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="h-12 w-12 rounded-full" />
      </div>
      <div class="mt-3 flex flex-col text-xs text-blue-700 leading-5">
        <div>
          <a href="#">
            At Upgrowth since 2016
          </a>
        </div>
        <div>
          
          <a href="#" class="ml-1">
            Github Streak 353 days
          </a>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zm-13.9 7.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z"/>
        </svg>
          <a href="#">
            Twitter 10k followers
          </a>
        </div>
      </div>
      <div>
        <button>
          Connect
        </button>
      </div>
      <div>
        Connections
      </div>
      <div>
        About
      </div>
      <div>
        Kudos
      </div>
    </div>
  ) 
}

export default SideProfile