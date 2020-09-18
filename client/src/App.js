import React from 'react';
import './styles/main.css';
import LoginScreen from './components/LoginScreen.js'
import UserProfile from './components/UserProfile.js'
import SideProfile from './components/SideProfile.js'
import CompanyPage from './containers/CompanyPage.js'
import LandingPage from './containers/LandingPage.js'
import Dashboard from './containers/Dashboard.js'

function App() {
  return (
    <div>
     <CompanyPage/> 
    </div> 
  );
}

export default App;
