import React from 'react';
import CompanyCard from './components/CompanyCard.js'
import './styles/main.css';
import HeroSection from './components/HeroSection.js'
import Footer from './components/Footer.js'
import LoginScreen from './components/LoginScreen.js'
import BlogSections from './components/BlogSections.js'
import Features from './components/Features.js'
import SideBar from './components/SideBar.js'
import NavHeader from './components/NavHeader.js'
import OrgChart from './components/OrgChart.js'


function App() {
  return (
   <div>
     {/* <HeroSection />
     <Features />
     <BlogSections />
     <Footer /> */}
     {/* <SideBar>
       <CompanyCard />
       <CompanyCard />
       <CompanyCard />
     </SideBar> */}
     <SideBar>
      <OrgChart />
     </SideBar>
   </div>
  );
}

export default App;
