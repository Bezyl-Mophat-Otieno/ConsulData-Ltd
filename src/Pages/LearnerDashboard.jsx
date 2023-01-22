import React from 'react'
import About from '../Components/StudentDashboard.jsx/About'
import Cart from '../Components/StudentDashboard.jsx/Cart'
import Grades from '../Components/StudentDashboard.jsx/Grades'
import Mycourses from '../Components/StudentDashboard.jsx/Mycourses'
import Resources from '../Components/StudentDashboard.jsx/Resources'
import Notepad from '../Components/StudentDashboard.jsx/Notepad'
import CoursesFetched from '../Components/LandingPageComponents/CoursesFetched'
import { GlobalContext } from '../Components/Context/GlobalProvider'
import { useContext } from 'react'
function LearnerDashboard() {
    const {state} = useContext(GlobalContext)
  return (
    <>
    { state.showAllCourses && <CoursesFetched/>}
    { state.showMyCourses && <Mycourses/>}
    { state.showGrades && <Grades/>}
    { state.showNotePad && <Notepad/>}
    { state.showResources && <Resources/>}
    { state.showAbout && <About/>}
    { state.showCart && <Cart/>}
   </>
  )
}

export default LearnerDashboard