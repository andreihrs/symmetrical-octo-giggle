import React from 'react'
import '../styles/orgchart.css'
import '../styles/main.css'

const OrgChart = () => {
  return (
    <div class="py-10">
      <div class="org-chart flex justify-center">
        <ul class="relative pt-5 transition duration-50">
          <li class="relative float-left text-center py-5 px-4 transition-all duration-75">
            <div class="user">
              <img src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" class="h-60 w-60 rounded-full my-0 mx-auto"/>
              <div class="name mt-4 mx-0 mb-0">Luann Brannick</div>
              <div class="mt-2 mb-3 font-medium">System Architect</div>
              <a class="text-sm text-red-700" href="#">Mike Dinardo</a>
            </div>
            <ul class="relative pt-5 transition duration-50">
              <li class="relative float-left text-center py-5 px-4 transition-all duration-75">
                <div class="user">
                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg" class="h-60 w-60 rounded-full my-0 mx-auto" />
                  <div class="name mt-4 mx-0 mb-0">Lynn Maynard</div>
                  <div class="mt-2 mb-3 font-medium">System Architect</div>
                  <a class="text-sm text-red-700" href="#">Luann Brannick</a>
                </div>
                <ul class="relative pt-5 transition duration-50">
                  <li class="relative float-left text-center py-5 px-4 transition-all duration-75">
                    <div class="user">
                      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/towhidzaman/128.jpg" class="h-60 w-60 rounded-full my-0 mx-auto" />
                      <div class="name mt-4 mx-0 mb-0">Fleta Odriscoll</div>
                      <div class="mt-2 mb-3 font-medium">System Architect</div>
                      <a class="text-sm text-red-700" href="#">Lynn Maynard</a>
                    </div>
                  </li>
                  <li class="relative float-left text-center py-5 px-4 transition-all duration-75">
                    <div class="user">
                      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/arashmil/128.jpg" class="h-60 w-60 rounded-full my-0 mx-auto" />
                      <div class="name mt-4 mx-0 mb-0">Elfreda Grebin</div>
                      <div class="mt-2 mb-3 font-medium">System Architect</div>
                      <a class="text-sm text-red-700" href="#">Lynn Maynard</a>
                    </div>
                  </li>
                </ul>
              </li>
              <li class="relative float-left text-center py-5 px-4 transition-all duration-75">
                <div class="user">
                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/vista/128.jpg" class="h-60 w-60 rounded-full my-0 mx-auto" />
                  <div class="name mt-4 mx-0 mb-0">Jahn Philson Doe</div>
                  <div class="mt-2 mb-3 font-medium">System Architect</div>
                  <a class="text-sm text-red-700" href="#">Luann Brannick</a>
                </div>
                <ul class="relative pt-5 transition duration-50">
                  <li class="relative float-left text-center py-5 px-4 transition-all duration-75">
                    <div class="user">
                      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/marcosmoralez/128.jpg" class="h-60 w-60 rounded-full my-0 mx-auto" />
                      <div class="name mt-4 mx-0 mb-0">Roy Lemarie</div>
                      <div class="mt-2 mb-3 font-medium">System Architect</div>
                      <a class="text-sm text-red-700" href="#">Jahn Philson Doe</a>
                    </div>
                  </li>
                  <li class="relative float-left text-center py-5 px-4 transition-all duration-75">
                    <div class="user">
                      <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg" class="h-60 w-60 rounded-full my-0 mx-auto" />
                      <div class="name">Eloisa Stubbolo</div>
                      <div class="mt-2 mb-3 font-medium">System Architect</div>
                      <a class="text-sm text-red-700" href="#">Jahn Philson Doe</a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default OrgChart