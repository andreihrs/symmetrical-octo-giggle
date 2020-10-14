import React, { useState, prevState, useReducer } from "react";
import CompanyProfile from "./CompanyHeader.js";
import NavHeader from "./NavHeader.js";
import SideProfile from "./SideProfile.js";
import { GET_COMPANY_EMPLOYEES } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import FifaPlayers from "./FifaPlayers.js";
import { useParams, useHistory } from "react-router-dom";
import "../styles/main.css";
import FifaPlayersHeader from "./FifaPlayersHeader";
import Filter from "../utils/Filter";
import EmployeeCard from "./EmployeeCard";
import EmployeesPreview from "./EmployeesPreview.js";

// TO-DO: Dashboard to see natioanlity, ethnicity, jobs
// TO-DO: Add suggested groups, cohorts, lists, etc.
function CompanyPage(props) {
  const { name } = useParams();
  let history = useHistory();
  const filters = ["Department", "Location", "Full Team"];
  const { showSide, setShowSide } = useState(false);

  const { loading, error, data } = useQuery(GET_COMPANY_EMPLOYEES, {
    variables: { filter: name },
  });

  const [profile, setProfile] = useState({
    name: "Gabriel Weinberg",
    title: "Founder",
  });

  const [sectionsState, setSectionsState] = useState({
    directors: true,
    managers: false,
    seniors: false,
  });

  const [filtersState, setFiltersState] = useState({
    department: "",
    location: "",
    executiveLevel: "Full Team",
  });

  const [selectedEmployee, setSelectedEmployee] = useState({
    employeesState: false,
    employeeSelected: null,
  });

  const departments = ["Design", "Engineering", "Sales", "Marketing"];
  const locations = ["US", "Europe"];
  const executiveLevels = ["Seniors and up", "Managers and up", "C-Executives"];
  const sections = ["directors", "managers", "seniors"];
  const positions = [
    "Director of Technology",
    "Director of Data",
    "Director of Marketing",
    "VP of Marketing",
    "Chief Marketing Officer",
    "Marketing Senior",
    "VP of Operations",
    "Director of Design",
    "VP of Design",
    "VP of Engineering",
  ];

  const marketingPositions = positions.filter((position) =>
    position.includes("Marketing")
  );

  const previewHandler = (e, section) => {
    e.preventDefault();
    setSectionsState({ ...sectionsState, [section]: true });
  };

  const onSelectFilter = (e, option, search) => {
    search = search[0].toLowerCase() + search.substring(1);
    console.log(search);
    if (search === "full Team") {
      search = "executiveLevel";
    }
    setFiltersState({ ...filtersState, [search]: option });
  };

  const onSelectEmployee = (employee) => {
    setSelectedEmployee((prevState) => {
      if (prevState.employeeSelected === employee) {
        return { ...prevState, employeesState: false, employeeSelected: "" };
      } else {
        return {
          ...prevState,
          employeesState: true,
          employeeSelected: employee,
        };
      }
    });
    setSectionsState({ ...sectionsState, ["managers"]: true });
  };

  if (error) return <h1>Something went wrong</h1>;
  if (loading) return <h1>Loading...</h1>;

  let employees = [];
  if (data) {
    console.log(data);
    employees = data.getCompanyEmployees;
  }

  const styles = {
    textClass: "md:flex md:grid-cols-5 px-4 mb-4 border-l-4 border-gray-500",
    sectionClass: "relative grid md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8",
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
          <Filter
            search={filters[0]}
            options={departments}
            onSelectFilter={onSelectFilter}
          />
          <Filter
            search={filters[1]}
            options={locations}
            onSelectFilter={onSelectFilter}
          />
          <Filter
            search={filters[2]}
            options={executiveLevels}
            onSelectFilter={onSelectFilter}
          />
        </div>
        {/* <FifaPlayers employees={employees} company={name} history={history} /> */}
      </div>
      {false || showSide ? <SideProfile /> : null}
      <div className="sm:px-20 sm:mx-24 mt-12">
        <div className="md:grid md:grid-cols-5 border-l-8 border-blue-500 px-4 mb-4">
          <p className="text-2xl md:col-span-1 md:self-center font-semibold px-4 ">
            C-Suite
          </p>
          <div className="md:col-span-2 md:col-start-3">
            <EmployeeCard />
          </div>
        </div>
        <div
          className={`${styles.textClass} ${
            sectionsState.directors
              ? "border-l-8 border-blue-500 border-t"
              : "border-l-4 border-gray-500"
          }`}
        >
          <p
            className="text-2xl sm:self-center font-semibold md:col-span-1"
            onClick={() =>
              setSectionsState({
                ...sectionsState,
                directors: !sectionsState.directors,
              })
            }
          >
            Directors
          </p>
          {true && sectionsState.directors ? (
            <div className={`${styles.sectionClass}`}>
              {filtersState.department
                ? positions
                    .filter((position) =>
                      position.includes(filtersState.department)
                    )
                    .map((position) => (
                      <div className="sm:col-span-2">
                        <EmployeeCard
                          position={position}
                          selected={onSelectEmployee}
                        />
                      </div>
                    ))
                : positions.map((position) => (
                    <div
                      className={`relative sm:col-span-2 ${
                        !selectedEmployee.employeesState
                          ? null
                          : selectedEmployee.employeeSelected === position
                          ? "opacity-100"
                          : "opacity-50"
                      }`}
                    >
                      <EmployeeCard
                        position={position}
                        selected={onSelectEmployee}
                      />
                    </div>
                  ))}
            </div>
          ) : (
            <EmployeesPreview
              onClick={(e) => previewHandler(e, sections[0])}
              section={sections[0]}
            />
          )}
        </div>
        <div
          className={`${styles.textClass} ${
            sectionsState.managers
              ? "border-l-8 border-blue-500 border-t"
              : "border-l-4 border-gray-500"
          }`}
        >
          <p
            className="text-2xl sm:self-center font-semibold md:col-span-1 "
            onClick={() =>
              setSectionsState({
                ...sectionsState,
                managers: !sectionsState.managers,
              })
            }
          >
            Managers
          </p>
          {true && sectionsState.managers ? (
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
          ) : (
            <EmployeesPreview
              onClick={(e) => previewHandler(e, sections[1])}
              section={sections[1]}
            />
          )}
        </div>
        <div
          className={`${styles.textClass} ${
            sectionsState.seniors
              ? "border-l-8 border-blue-500 border-t"
              : "border-l-4 border-gray-500"
          }`}
        >
          <p
            className="text-2xl sm:self-center font-semibold md:col-span-1"
            onClick={() =>
              setSectionsState({
                ...sectionsState,
                seniors: !sectionsState.seniors,
              })
            }
          >
            Seniors
          </p>
          {true && sectionsState.seniors ? (
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
          ) : (
            <EmployeesPreview
              onClick={(e) => previewHandler(e, sections[2])}
              section={sections[2]}
            />
          )}
        </div>
      </div>
      {/* <CompanyChart />  */}
    </div>
  );
}

export default CompanyPage;
