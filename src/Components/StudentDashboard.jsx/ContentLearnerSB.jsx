import React from 'react'
import CoursesFetched from '../LandingPageComponents/CoursesFetched'
import Cart from './Cart'
import Grades from './Grades'
import Mycourses from './Mycourses'
import Resources from './Resources'
import Notepad from './Notepad'
import About from './About'
 import { useContext } from 'react'
 import { GlobalContext } from '../Context/GlobalProvider'
function ContentLearnerDashboard() {
  const {reducer , state , dispatch , initialState} = useContext(GlobalContext)


  return (
   <>
    { state.showAllCourses && <CoursesFetched/>}
    { state.showMyCourses && <Mycourses/>}


   </>
  )
}

export default ContentLearnerDashboard