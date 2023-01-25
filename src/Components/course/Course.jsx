import React from 'react'
import courses from '../../data'
import protoImage from '../../Images/ImageResources/marketing.jpg'
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
function Course({courseName}) {
const singleCourse = courses.find((course)=>{
  return course.name === courseName
})

  return (
    <div>    <div className="singleCourse card shaddow ">
    <div> 
    <div className=' d-flex justify-content-center  mt-5'>
    <div className='btn btn-success ms-5 mb-5'>LECTURE-NOTES</div>
    <div  className='btn btn-success ms-5 mb-5'>TUTORIALS</div>
    <div  className='btn btn-success ms-5 mb-5'>CURRICULUM</div>
  
    </div>
    </div>
    <div className="singleCoursetWrapper">
      <img
        className="singleCourseImg"
        src={protoImage}
        alt=""
      />
      <h1 className="singleCourseTitle">
        {singleCourse.name}
        <div className="singleCourseEdit">
          <i className="singleCourseIcon far fa-edit"></i>
          <i className="singleCourseIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singleCourseInfo">
        <span>
          Tutor:
          <b className="singleCourseAuthor">
              {singleCourse.tutor}
          </b>
        </span>
        <span> <FontAwesomeIcon icon={faEye} /> 345 subscribers </span>
      </div>
      <p className="singleCourseDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
        quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
        Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
        eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
        error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
        impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
        odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit modi eos!
      </p>
      <div className=" d-flex justify-content-center mb-3 ">
  <button type="submit" className="btn call-to-action"> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
  <div className='ms-5 price-tag'>ksh {singleCourse.price}/= </div>
  </div>
    </div>
  </div></div>
  )
}

export default Course