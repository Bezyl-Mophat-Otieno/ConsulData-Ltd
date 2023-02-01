import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import LearnerNavBar from './StudentDashboard/LearnerNavBar'
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