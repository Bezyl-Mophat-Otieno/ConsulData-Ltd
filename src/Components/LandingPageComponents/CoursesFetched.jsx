import React from 'react'
import courses from '../../data'
import protoImage from '../../Images/ImageResources/marketing.jpg'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../Context/GlobalProvider'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function CoursesFetched() {

  const{ searching ,searchTerm , addedToCart , setAddedToCart , cart , setCart } = useContext(GlobalContext)
  //Returns an array that matches the condition
  const keys = ["name","price"]
  const addToCart = (course)=>{
 setAddedToCart(true)
 setCart(()=>[...cart,course])
  }
  console.log(cart)

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
{
  courses.filter((course)=>{
  
      return course.name.toLowerCase().includes(searchTerm) 
 
  }).map((course)=>{
      const{id,name,price} = course 
        return  <div class="col">
        <Link to={`/courses/course/${course.name}`}>
       <div className="card shadow-lg course" key={id}>
      <img src={protoImage} className="card-img-top  course-thumbnail" alt=""/>
      <div className="card-body">
        <h5 className="card-title course-tittle">{name}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    </Link>
      <div className=" d-flex justify-content-center mb-3 mt-3 ">
     <Link to={'/cart'}><button onClick={()=>addToCart(course)} type="submit" className="btn call-to-action"> 
     <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button></Link>
  <div className='ms-5 price-tag'>ksh {price}/= </div>
  </div>
  </div>
     })
}
</div>
  )
}

export default CoursesFetched