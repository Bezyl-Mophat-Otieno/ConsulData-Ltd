import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import protoImage from '../../Images/ImageResources/cybersecurity.jpg'
import './completeB.css'
function CompleteB() {
  return (
    <div>
    
    <div>    <div className="singleCourse card shaddow ">
    <div> 
    </div>
    <div className="singleCoursetWrapper">
      <img
        className="singleCourseImg"
        src={protoImage}
        alt=""
      />
      <h1 className="singleCourseTitle">
       Data Analysis in the Realm of  Technology
        <div className="singleCourseEdit">
          <i className="singleCourseIcon far fa-edit"></i>
          <i className="singleCourseIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singleCourseInfo">
        <span>
          Tutor:
          <b className="singleCourseAuthor">
             Mophat Harooun - Tech Advisor CRS.
          </b>
        </span>
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
  <div className='ms-5 price-tag'> Add Notes</div>
  </div>
    </div>
  </div></div></div>
  )
}

export default CompleteB