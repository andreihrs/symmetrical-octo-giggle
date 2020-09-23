import React from "react";
import "./styles/main.css";
import LoginScreen from "./components/LoginScreen.js";
import UserProfile from "./components/UserProfile.js";
import SideProfile from "./components/SideProfile.js";
import CompanyPage from "./components/CompanyPage.js";
import LandingPage from "./components/LandingPage.js";
import Dashboard from "./components/Dashboard.js";
import OrgChartNew from "./components/OrgChartNew";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/welcome" component={Dashboard} />
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/company" component={CompanyPage} />
    </Router>
  );
}

export default App;
