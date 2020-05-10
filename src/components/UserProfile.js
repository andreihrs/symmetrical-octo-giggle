import React from 'react'
import '../styles/main.css'
import '../styles/userprofile.css'
import CompanyProfile from './CompanyProfile'
import placehold from '../unsplash.jpg'

const Profile = () => {
  //TO-DO: MAKE IT MORE BEAUTIFUL
  return (
    <div class="bg-gray-100 h-screen px-5 py-2">
      <div class="relative flex flex-col">
        <div class="flex justify-end inset-x-0 top-0 mb-5">
          <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150" aria-label="Close">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="self-center flex flex-col items-center w-64">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="h-16 w-16 rounded-full mb-2"/>
          <h4>Ioannis Papadopulous</h4>
          <div class="text-xs text-gray-500">
            <p>Software Developer</p>
            <p>Zurich, Switzerland</p>
          </div>
          <div class="w-full">
            <div class="inline-flex justify-around text-xs w-full">
              <div class="inline-flex">
                <p class="text-gray-500">Connections</p>
                <span class="font-medium">&nbsp;150</span>
              </div>
              <div class="inline-flex">
                <p class="text-gray-500">Profile views</p>
                <span class="font-medium">&nbsp;30</span>
              </div>
            </div>
          </div>
          <div class="my-2">
            <button class="bg-indigo-600 rounded-full text-white px-4 py-1">
              Connect
            </button>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-8 mx-5 mt-5">
          <div>
            <h3>Portfolio</h3>
            <div class="bg-white w-64 mt-3 border">
              <img src={placehold} class="mb-4"/>
              <img src={placehold} />
            </div>
          </div>
          <div>
            <h3>Experience</h3>
            <div>
            <ul class="relative timeline w-64 mt-5 mx-auto py-4 list-none text-xs">

              <li>
                  <div class="direction-r">
                      <div class="flag-wrapper">
                          <span class="flag">Freelancer</span>
                          <span class="time-wrapper"><span class="time">2013 - present</span></span>
                      </div>
                      <div class="desc">My current employment. Way better than the position before!</div>
                  </div>
              </li>

              <li>
                  <div class="direction-r">
                      <div class="flag-wrapper">
                          <span class="flag">Apple Inc.</span>
                          <span class="time-wrapper"><span class="time">2011 - 2013</span></span>
                      </div>
                      <div class="desc">My first employer. All the stuff I've learned and projects I've been working on.</div>
                  </div>
              </li>

              <li>
                  <div class="direction-r">
                      <div class="flag-wrapper">
                          <span class="flag">Harvard University</span>
                          <span class="time-wrapper"><span class="time">2008 - 2011</span></span>
                      </div>
                      <div class="desc">A description of all the lectures and courses I have taken and my final degree?</div>
                  </div>
              </li>

            </ul>
            </div>
          </div>
          <div>
            <h3>Skills</h3>
            <ul class="list-disc text mt-4 leading-10">
              <li>
                Python
              </li>
              <li>
                Ruby
              </li>
              <li>
                CSS
              </li>
              <li>
                HTML
              </li>
              <li>
                Adobe XD
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile