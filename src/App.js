import React from 'react';
import CompanyCard from './components/CompanyCard.js'
import './styles/main.css';
import HeroSection from './components/HeroSection.js'
import Footer from './components/Footer.js'
import LoginScreen from './components/LoginScreen.js'

function App() {
  return (
   <div>
     <LoginScreen />
     {/* <HeroSection />
     <Footer /> */}
   </div>
  );
}

export default App;
