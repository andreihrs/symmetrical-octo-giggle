import React from 'react'
import '../styles/main.css'
import test from '../you-x-ventures.jpg'

const BlogSections = () => {
  return (
    <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="relative mx-auto lg:max-w-7xl">
        <div>
          <h2 class="text-3xl font-bold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Recent publications
          </h2>
          <p class="mt-3 text-xl text-gray-600 leading-7 sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </div>
        <div class="mt-12 pt-12 border-t-2 border-gray-100 grid gap-16 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12">
          <div>
            <a href="#" class="inline-block">
              <span class="inline-flex items-center bg-indigo-100 py-1/2 px-3 rounded-full text-indigo-800 text-sm font-medium leading-5 ">
                Article
              </span>
            </a>
            <h4 class="mt-3 text-2xl font-bold">
              Boost your conversion rate
            </h4>
            <p>
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <div>

            </div>
          </div>
          <div>
            <span class="inline-flex items-center bg-indigo-100 py-1/2 px-3 rounded-full text-indigo-800 text-sm font-medium leading-5 ">
              Video
            </span>
            <h4 class="text-2xl font-bold">
              How to use org charts to find talent
            </h4>
            <p>
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
            </p>
          </div>
          <div>
            <span class="inline-flex items-center bg-indigo-100 py-1/2 px-3 rounded-full text-indigo-800 text-sm font-medium leading-5 ">
              Case Study
            </span>
            <h4 class="text-2xl font-bold">
              Improve your customer experience
            </h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.
            </p>
            <img alt="Paul York" src={test} class="h-10 w-10 rounded-full"/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default BlogSections