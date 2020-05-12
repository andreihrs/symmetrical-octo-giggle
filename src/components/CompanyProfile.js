
import React from 'react'
import '../styles/main.css'
import logo from '../logo.svg'

const CompanyProfile = () => {
  return (
    <div class="max-w-4xl grid grid-cols-5 gap-6 h-40 border border-gray-100 shadow-sm py-5 my-10 mx-auto">
      <div class="col-span-1 flex justify-center">
        <img src={logo} class="h-32 w-32 border border-gray-200" />
      </div>
      <div class="col-span-3">
        <div class="text-xs">
          <h3 class="text-xl font-bold text-indigo-600">
            Google Inc.
          </h3>
          <div class="grid grid-cols-4 gap-2">
            <div class="font-bold text-gray-900">
              Headquarters
              <p class="font-normal text-gray-600">
                Mountain View, CA
              </p>
            </div>
            <div class="font-bold text-gray-900">
              Company Size
              <p class="font-normal text-gray-600">
                10,001+
              </p>
            </div>
            <div class="font-bold text-gray-900">
              Industry
              <p class="font-normal text-gray-600">
                Internet
              </p>
            </div>
            <div class="font-bold text-gray-900">
              Type
              <p class="font-normal text-gray-600">
                Public Company
              </p>
            </div>
            <div class="font-bold text-gray-900">
              Founded
              <p class="font-normal text-gray-600">
                1998
              </p>
            </div>
            <div class="font-bold text-gray-900">
              Website
              <p class="font-bold text-blue-700">
                Google
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1 flex items-start justify-center -ml-5">
        <button class="bg-green-400 text-white font-medium py-2 px-3 text-sm rounded-sm">
          See All Employees
        </button>
      </div>
    </div>
  )
}

export default CompanyProfile