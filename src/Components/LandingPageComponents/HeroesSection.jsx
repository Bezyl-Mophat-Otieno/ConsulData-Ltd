import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GlobalContext } from '../Context/GlobalProvider';
import { useContext } from 'react';
import SearchBar from './SearchBar';
import courses from './../../data';


function HeroesSection() {
  const {setSearchTerm,searchTerm } = useContext(GlobalContext)
const categories = courses.map((course)=>{
  return course.category ;
})

const uniqueCategory = [...new Set(categories)]
  return (
    <>

    <div class="card mt-5 mb-5">
  <div class="card-header">Featured</div>
  <div class="card-body heroes-section row ">
  <div className='col-8'>
    <h5 class="card-title heroes-header">Find a perfect Online Course</h5>
    <p class="card-text heroes-text">Take a course with us and get a universally aknowledged 
    certificate of completion  and  advance your career.</p>

    <NavDropdown className='btn btn-outline-secondary' title="Categories" id="basic-nav-dropdown">
             {
              uniqueCategory.map((category)=>{
                return <NavDropdown.Item href={`/courses/category/${category}`}>{category}</NavDropdown.Item>
              })
             }
              </NavDropdown> 
              
               </div>
              <SearchBar/>

  </div>  
  </div>
  <div className='popular-searches mb-5'> <span className='course-tittle text-secondary fs-5 fw-5 text-decoration-underline'>Popular Searches </span>: Data Analysis, Photoshop, Graphic Design, Web Development, Digital Marketing</div>
    </>

  )
}

export default HeroesSection