import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

const GET_USER_INFO = gql`
  {
    people {
      id
      firstName
      lastName
    }
  }
`;

const GettingGraphQLData = (props) => {
  return (
<div class="bg-gray-900">
  <div class="pt-12 sm:pt-16 lg:pt-24">
    <div class="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
        <h2 class="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
          Pricing
        </h2>
        <p class="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
          The right price for you, whoever you are
        </p>
        <p class="text-xl leading-7 text-gray-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.
        </p>
      </div>
    </div>
  </div>
  <div class="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
    <div class="relative">
      <div class="absolute inset-0 h-3/4 bg-gray-900"></div>
      <div class="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div>
                <h3 class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600" id="tier-standard">
                  Standard
                </h3>
              </div>
              <div class="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                $49
                <span class="ml-1 text-2xl leading-8 font-medium text-gray-500">
                  /mo
                </span>
              </div>
              <p class="mt-5 text-lg leading-7 text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: check -->
                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700">
                    Pariatur quod similique
                  </p>
                </li>

                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: check -->
                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700">
                    Sapiente libero doloribus modi nostrum
                  </p>
                </li>

                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: check -->
                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700">
                    Vel ipsa esse repudiandae excepturi
                  </p>
                </li>

                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: check -->
                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700">
                    Itaque cupiditate adipisci quibusdam
                  </p>
                </li>
              </ul>
              <div class="rounded-md shadow">
                <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" aria-describedby="tier-standard">
                  Get started
                </a>
              </div>
            </div>
          </div>

          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div>
                <h3 class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600" id="tier-standard">
                  Enterprise
                </h3>
              </div>
              <div class="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                $79
                <span class="ml-1 text-2xl leading-8 font-medium text-gray-500">
                  /mo
                </span>
              </div>
              <p class="mt-5 text-lg leading-7 text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: check -->
                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700">
                    Pariatur quod similique
                  </p>
                </li>

                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: check -->
                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700">
                    Sapiente libero doloribus modi nostrum
                  </p>
                </li>

                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: check -->
                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700">
                    Vel ipsa esse repudiandae excepturi
                  </p>
                </li>

                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: check -->
                    <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700">
                    Itaque cupiditate adipisci quibusdam
                  </p>
                </li>
              </ul>
              <div class="rounded-md shadow">
                <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out" aria-describedby="tier-standard">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
      <div class="max-w-md mx-auto lg:max-w-5xl">
        <div class="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
          <div class="flex-1">
            <div>
              <h3 class="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-white text-gray-800">
                Discounted
              </h3>
            </div>
            <div class="mt-4 text-lg leading-7 text-gray-600">
              Get full access to all of standard license features for solo projects that make less than $20k gross revenue for
              <strong class="font-semibold text-gray-900">
                $29
              </strong>
              .
            </div>
          </div>
          <div class="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
            <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
              Buy Discounted License
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default graphql(GET_USER_INFO)(GettingGraphQLData);
