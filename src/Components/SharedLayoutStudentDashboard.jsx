import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import LearnerNavBar from './StudentDashboard.jsx/LearnerNavBar'
function SharedLayoutStudentDashboard() {
  return (
    <>
    <LearnerNavBar/>
    <Outlet/>
    <Footer/>
    </>
      )


}

export default SharedLayoutStudentDashboard