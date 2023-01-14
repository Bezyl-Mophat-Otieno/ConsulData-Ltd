import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
<>
 <div className="card mt-5 mb-5 wrapper container-fluid">
 <div className="card-header text-center fw-bolder">Contact Us <FontAwesomeIcon icon={faContactBook}/> </div>
  <div className="card-body footer row ">
  <div className='col-12 col-md-3'>
   <button className='btn btn-outline-dark me-2 ' id='li'><FontAwesomeIcon icon={faLinkedinIn}/></button>
   <label htmlFor='li' className='contacts'>www.linkedIn.com/crs</label>
  </div>
  <div className='col-12 col-md-3'>
   <button className='btn btn-outline-dark me-2' id='fb'><FontAwesomeIcon icon={faFacebookF}/></button>
   <label htmlFor='fb' className='contacts'>www.facebook.com/crs</label>
  </div>
  <div className='col-12 col-md-3'>
   <button className='btn btn-outline-dark me-2 ' id='ig'><FontAwesomeIcon icon={faInstagram}/></button>
   <label htmlFor='ig' className='contacts'>www.Instagram.com/crs</label>
  </div>
  <div className='col-12 col-md-3 '>
   <button className='btn btn-outline-dark me-2' id='whatsapp'><FontAwesomeIcon icon={faWhatsapp}/></button>
   <label htmlFor='whatsapp' className='contacts '>WWW.WhatsappWeb.com/crs</label>
  </div>
  <div className='d-flex justify-content-center mt-4'>
   <label  className='contacts' ><span className='code'>KE <FontAwesomeIcon icon={faPhone}/></span>  +2547 (027)(159)(06) </label>
  </div>

  </div>  
  </div>
</>  )
}

export default Footer