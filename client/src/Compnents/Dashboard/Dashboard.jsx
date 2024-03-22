import React from 'react'
import SideBar from './Components/SideBar Section/Sidebar'
import Body from './Components/Body Section/Body'

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard flex">
        <div className="dashboardContainer flex">
          <SideBar/>
          <Body/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
