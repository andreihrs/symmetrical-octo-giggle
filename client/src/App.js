import React from "react";
import "./styles/main.css";
import LoginScreen from "./components/LoginScreen.js";
import UserProfile from "./components/UserProfile.js";
import SideProfile from "./components/SideProfile.js";
import CompanyPage from "./components/CompanyPage.js";
import LandingPage from "./components/LandingPage.js";
import Dashboard from "./components/Dashboard.js";
import OrgChartNew from "./components/OrgChartNew";
import FifaShowcase from "./components/FifaShowcase";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={FifaShowcase} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/welcome" component={LandingPage} />
      <Route path="/company/:name" component={CompanyPage} />
    </Router>
  );
}

export default App;
