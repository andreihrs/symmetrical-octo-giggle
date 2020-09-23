import React from "react";
// import "./styles/main.css";
import LoginScreen from "./components/LoginScreen.js";
import UserProfile from "./components/UserProfile.js";
import SideProfile from "./components/SideProfile.js";
import CompanyPage from "./containers/CompanyPage.js";
import LandingPage from "./containers/LandingPage.js";
import Dashboard from "./containers/Dashboard.js";
import OrgChartNew from "./components/OrgChartNew";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_USERS = gql`
  {
    users {
      id
      login
      avatar_url
    }
  }
`;

function App() {
  // const { loading, error, data } = useQuery(GET_USERS);

  // if (error) return <h1>Something went wrong</h1>;
  // if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <OrgChartNew />
    </div>
  );
}

export default App;
