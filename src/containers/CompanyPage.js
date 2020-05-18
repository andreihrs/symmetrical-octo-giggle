import React from 'react'
import CompanyChart from '../components/CompanyChart.js'
import CompanyProfile from '../components/CompanyProfile.js'
import NavHeader from '../components/NavHeader.js'
import OrgChart from '../components/OrgChart.js'
// TO-DO: Dashboard to see natioanlity, ethnicity, jobs
// TO-DO: Add suggested groups, cohorts, lists, etc.
function CompanyPage() {
  return (
    <div>
      <NavHeader />
      <CompanyProfile />
      <div className="flex justify-center text-left">
        <div>
          <span className="rounded-md shadow-sm">
            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150">
              Org Chart
              <svg className="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
          </span>
        </div>
      </div>
      <OrgChart />
      {/* <CompanyChart /> */}
    </div>
  )
}

export default CompanyPage;