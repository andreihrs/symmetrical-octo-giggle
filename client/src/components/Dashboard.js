import React from "react";
import CompanyCard from "../components/CompanyCard.js";
import SideBar from "../components/SideBar.js";
import Route from "react-router-dom";

const Dashboard = () => {
  const companies = ["DuckDuckGo", "LeadIQ", "Thin Air"];
  // React.useEffect(() => {
  //   console.log("COMPONENT DID MOUNT");
  // }, []);

  return (
    <div>
      <SideBar>
        <CompanyCard company={companies[0]} />
        <CompanyCard company={companies[1]} />
        <CompanyCard company={companies[2]} />
      </SideBar>
    </div>
  );
};

export default Dashboard;
