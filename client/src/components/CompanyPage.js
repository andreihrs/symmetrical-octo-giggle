import React from "react";
import CompanyChart from "./CompanyChart.js";
import CompanyProfile from "./CompanyHeader.js";
import NavHeader from "./NavHeader.js";
import OrgChart from "./OrgChart.js";
import SideProfile from "./SideProfile.js";
import { GET_COMPANY_EMPLOYEES } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import FifaPlayers from "./FifaPlayers.js";
import { useParams } from "react-router-dom";
import FifaShowcase from "./FifaShowcase.js";
import "../styles/main.css";
import FifaPlayersHeader from "./FifaPlayersHeader";
import Filter from "../utils/Filter";
import FifaCard from "./FifaCard";
import FifaPlayer from "./FifaPlayer";
import EmployeeCard from "./EmployeeCard";
import EmployeesPreview from "./EmployeesPreview.js";

// TO-DO: Dashboard to see natioanlity, ethnicity, jobs
// TO-DO: Add suggested groups, cohorts, lists, etc.
function CompanyPage(props) {
  const { name } = useParams();
  const filters = ["Department", "Location", "Executive Level"];
  const { showSide, setShowSide } = React.useState(false);

  const { loading, error, data } = useQuery(GET_COMPANY_EMPLOYEES, {
    variables: { filter: name },
  });

  const [profile, setProfile] = React.useState({
    name: "Gabriel Weinberg",
    title: "Founder",
  });

  const [showDirectors, setShowDirectors] = React.useState(false);
  const [showManagers, setShowManagers] = React.useState(false);

  const previewHandler = (e) => {
    e.preventDefault();
    setShowDirectors(!showDirectors);
  };

  if (error) return <h1>Something went wrong</h1>;
  if (loading) return <h1>Loading...</h1>;

  let employees = [];
  if (data) {
    console.log(data);
    employees = data.getCompanyEmployees;
  }

  const styles = {
    textClass: "md:flex  md:grid-cols-5 px-4 mb-2 border-l-4 border-gray-500",
  };

  return (
    <div>
      <NavHeader />
      <CompanyProfile company={name} />
      {/* <div className="flex justify-center text-left">
        <div>
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
      </div> */}
      <div className="mt-12 sm:mt-24 border-t bg-white sm:px-20 sm:py-16 p-12">
        <FifaPlayersHeader />
        <div className="flex flex-start mt-12 space-x-8 sm:mx-24">
          <Filter search={filters[0]} />
          <Filter search={filters[1]} />
          <Filter search={filters[2]} />
        </div>
        {/* <FifaPlayers employees={employees} company={name} /> */}
      </div>
      {false || showSide ? <SideProfile /> : null}
      <div className="sm:px-20 sm:mx-24 mt-12">
        <div className="md:grid md:grid-cols-5 border-l-8 border-blue-500 border-b px-4 mb-2">
          <p className="text-2xl md:col-span-1 md:self-center font-semibold px-4 ">
            C-Suite
          </p>
          <div className="md:col-span-2 md:col-start-3">
            <EmployeeCard />
          </div>
        </div>
        <div
          className={`${styles.textClass} ${
            showDirectors
              ? "border-l-8 border-blue-500"
              : "border-l-4 border-gray-500"
          }`}
        >
          <p
            className="text-2xl sm:self-center font-semibold md:col-span-1"
            onClick={() => setShowDirectors(!showDirectors)}
          >
            Directors
          </p>
          {true && showDirectors ? (
            <div className="grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
              <div className="sm:col-span-2">
                <EmployeeCard />
              </div>
              <div className="sm:col-span-2">
                <EmployeeCard />
              </div>
              <div className="sm:col-span-2">
                <EmployeeCard />
              </div>
              <div className="sm:col-span-2">
                <EmployeeCard />
              </div>
              <div className="sm:col-span-2">
                <EmployeeCard />
              </div>
            </div>
          ) : (
            <EmployeesPreview onClick={previewHandler} />
          )}
        </div>
        <div
          className={`${styles.textClass} ${
            showManagers
              ? "border-l-8 border-blue-500"
              : "border-l-4 border-gray-500"
          }`}
        >
          <p
            className="text-2xl sm:self-center font-semibold md:col-span-1 "
            onClick={() => setShowManagers(!showManagers)}
          >
            Managers
          </p>
          {true && showManagers ? (
            <div className="grid md:grid-cols-4 xl:grid-cols-6 ">
              <div className="sm:col-span-2">
                <EmployeeCard />
              </div>
              <div className="sm:col-span-2">
                <EmployeeCard />
              </div>
              <div className="sm:col-span-2">
                <EmployeeCard />
              </div>
            </div>
          ) : null}
        </div>
        <div className="md:flex border-l-4 md:grid-cols-5 border-gray-500 px-4">
          <p className="text-2xl sm:self-center font-semibold md:col-span-1">
            Seniors
          </p>
        </div>
      </div>
      {/* <CompanyChart />  */}
    </div>
  );
}

export default CompanyPage;
