import React from 'react'
import CoursesFetched from '../LandingPageComponents/CoursesFetched'
import Cart from './Cart'
import Grades from './Grades'
import Mycourses from './Mycourses'
import Resources from './Resources'
import Notepad from './Notepad'
 import { useContext } from 'react'
 import About from '../../Pages/aboutpage/About'
 import { GlobalContext } from '../Context/GlobalProvider'
function ContentLearnerDashboard() {
  const {state } = useContext(GlobalContext)


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

export default ContentLearnerDashboard