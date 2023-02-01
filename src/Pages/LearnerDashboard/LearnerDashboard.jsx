import React from 'react'
import About from '../aboutpage/About'
import Cart from '../../Components/StudentDashboard/Cart'
import Grades from '../../Components/StudentDashboard/Grades'
import Mycourses from '../../Components/StudentDashboard/Mycourses'
import Resources from '../../Components/StudentDashboard/Resources'
import Notepad from '../../Components/StudentDashboard/Notepad'
import CoursesFetched from '../../Components/LandingPageComponents/CoursesFetched'
import { GlobalContext } from '../../Components/Context/GlobalProvider'
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