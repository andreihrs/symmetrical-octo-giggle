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
import FifaPlayer from "./components/FifaPlayer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/welcome" component={LandingPage} />
      <Route path="/company/:name" component={CompanyPage} />
      <Route path="/user/:id" component={FifaPlayer} />
      {/* <Route exact path="/" component={SideProfile} /> */}
    </Router>
  );
}

export default App;
