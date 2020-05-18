import React from 'react'
import CompanyCard from '../components/CompanyCard.js'
import SideBar from '../components/SideBar.js'
 
const Dashboard = () => {
  return (
    <div>
      <SideBar>
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </SideBar>
    </div>
  )
}

export default Dashboard;
