import React from 'react'
import '../styles/main.css'
import logo from '../logo.svg'


const LoginScreen = () => {
  return(
    <div class="min-h-screen flex items-center justify-center bg-gray-150 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div>
          <img alt="logo" src={logo} class="mx-auto w-auto h-16" />
          <h2 class="mt-6 text-center text-3xl leading-9 font-bold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-center leading-5 text-gray-600">
            Or
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"> start your 14-day free trial
            </a>
          </p>
        </div>
        <form class="mt-8" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm">
            <div>
              <input aria-label="Email address" type="email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:leading-5" required placeholder="Email address" />
            </div>
            <div>
              <input aria-label="Password" type="password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:leading-5" required placeholder="Password" />
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between">

            <div class="flex items-center">
              <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"/>
              <label id="remember_me" class="ml-2 text-gray-900">
                Remember me
              </label>
            </div>

            <div class="leading-6">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline trasition duration-150 ease-in-out">
                Forgot your password?
              </a>
            </div>
          </div>
          <div class="mt-6">
            <button type="submit" class="group relative w-full flex justify-center px-5 py-3 border border-transparent text-white font-medium rounded-md bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginScreen;