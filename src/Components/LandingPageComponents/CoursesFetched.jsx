import React from 'react'
import courses from '../../data'
import protoImage from '../../Images/ImageResources/marketing.jpg'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../Context/GlobalProvider'
import { useContext } from 'react'

function CoursesFetched() {

  const{ searching ,searchTerm } = useContext(GlobalContext)
  //Returns an array that matches the condition
  const SearchResults = courses.filter((course)=>{
    return course.name.match(searchTerm)
  }) 

  const [courseList , setCourseList] =  useState(searching ? SearchResults : courses  )
 console.log(searching)
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
{
     courseList.map((course)=>{
      const{id,name,price} = course 
        return <div class="col">
        <a href='#'>
       <div className="card shadow-lg course" key={id}>
       
      <img src={protoImage} className="card-img-top  course-thumbnail" alt=""/>
      <div className="card-body">
        <h5 className="card-title course-tittle">{name}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className=" d-flex justify-content-center mb-3 ">
  <button type="submit" className="btn call-to-action"> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
  <div className='ms-5 price-tag'>ksh {price}/= </div>
  </div>
    </div>
    </a>
  </div>
     })
}
</div>
  )
}

export default CoursesFetched