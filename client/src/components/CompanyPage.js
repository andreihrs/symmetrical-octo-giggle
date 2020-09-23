import React from "react";
import CompanyChart from "./CompanyChart.js";
import CompanyProfile from "./CompanyProfile.js";
import NavHeader from "./NavHeader.js";
import OrgChart from "./OrgChart.js";
import SideProfile from "./SideProfile.js";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import FifaPlayers from "./FifaPlayers.js";

// TO-DO: Dashboard to see natioanlity, ethnicity, jobs
// TO-DO: Add suggested groups, cohorts, lists, etc.
function CompanyPage() {
  const { loading, error, data } = useQuery(GET_EMPLOYEES);

  if (error) return <h1>Something went wrong</h1>;
  if (loading) return <h1>Loading...</h1>;

  let employees = [];
  if (data) {
    console.log(data.getEmployees);
    employees = data.getEmployees;
    employees = employees.slice(0, 10);
  }

  return (
    <div>
      {/* <NavHeader /> */}
      <CompanyProfile />
      <div className="flex justify-center text-left">
        <div>
          {/* <SideProfile className="z-10"/> */}
          <span className="rounded-md shadow-sm">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            >
              Org Chart
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <FifaPlayers employees={employees} />
      {/* <OrgChart /> */}
      {/* <CompanyChart /> */}
    </div>
  );
}

const GET_EMPLOYEES = gql`
  {
    getEmployees {
      id
      name
      title
    }
  }
`;

const GET_COMPANY_EMPLOYEES = gql`
  query getCompanyEmployees {
    
  }
`;

export default CompanyPage;
