import React from 'react'
import '../styles/main.css'

const BlogSections = () => {
  return (
    <div class="bg-white pt-16 pb-10 px-4 sm:px-6 lg:pt-24 lg:pb-15 lg:px-8">
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
            <a href="#" class="block">
              <h4 class="mt-3 text-2xl font-bold text-gray-900 leading-8">
                Boost your conversion rate
              </h4>
              <p class="mt-3 text-base leading-6 text-gray-600">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
            </a>
            <div class="flex mt-6 items-center">
              <div class="flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="rounded-full h-10 w-10" />
              </div>
              <div class="ml-3">
                <p class="text-gray-800 font-medium text-sm leading-5">
                  Roel Aufderhar
                </p>
                <div class="flex text-sm leading-5 text-gray-600">
                  <time datetime="2020-03-10">
                    Mar 10, 2020
                  </time>
                  <span class="mx-1">
                    &middot;
                  </span>
                  <span>
                    6 min read
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span class="inline-flex items-center bg-red-100 py-1/2 px-3 rounded-full text-red-800 text-sm font-medium leading-5 ">
              Video
            </span>
            <h4 class="mt-3 text-2xl font-bold text-gray-900 leading-8">
              How to use org charts to find talent
            </h4>
            <p class="mt-3 text-base leading-6 text-gray-600">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
            </p>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <img alt="Paul York" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="h-10 w-10 rounded-full"/>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-800 leading-5">
                  Paul York
                </p>
                <div class="flex text-sm text-gray-600">
                  <time datetime="2020-04-01">
                    Apr 1, 2020
                  </time>
                  <span class="mx-1">
                    &middot;
                  </span>
                  <span> 
                    10 min read
                  </span>
                </div>            
              </div>        
            </div>
          </div>
          <div>
            <span class="inline-flex items-center bg-green-100 py-1/2 px-3 rounded-full text-green-800 text-sm font-medium leading-5 ">
              Case Study
            </span>
            <h4 class="mt-3 text-2xl font-bold text-gray-900 leading-8">
              Improve your customer experience
            </h4>
            <p class="mt-3 text-base leading-6 text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.
            </p>
            <div class="mt-6 flex items-center">
              <div class="flex-shrink-0">
                <img alt="Paul York" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="h-10 w-10 rounded-full"/>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-800 leading-5">
                  Paul York
                </p>
                <div class="flex text-sm text-gray-600">
                  <time datetime="2020-04-01">
                    Apr 1, 2020
                  </time>
                  <span class="mx-1">
                    &middot;
                  </span>
                  <span> 
                    10 min read
                  </span>
                </div>            
              </div>        
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSections