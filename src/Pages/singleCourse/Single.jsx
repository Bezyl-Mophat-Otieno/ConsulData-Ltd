import React from 'react'
import { useParams } from 'react-router-dom'
import Course from './../../Components/course/Course';
function Single() {

    const {courseName} = useParams()
  return (
    <div>{ <Course courseName={courseName}/> }</div>
  )
}

export default Single