import React from 'react'
import courses from '../../data'
import protoImage from '../../Images/ImageResources/marketing.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalProvider'
import { useContext } from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



function Cart() {
const {searchTerm , cart ,addedToCart} = useContext (GlobalContext)
  return (
    <div>
    <h1> Cart</h1> 
    <div class="row row-cols-1 row-cols-md-3 g-4">
{
  cart.filter((course)=>{
  
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
      <div className=" d-flex justify-content-center mb-3 ">
<button type="submit" className="btn call-to-action"> <FontAwesomeIcon icon={faShoppingCart}/> { addedToCart ? "Remove": "Add to Cart"}</button>
  <div className='ms-5 price-tag'>ksh {price}/= </div>
  </div>
    </div>
    </Link>
  </div>
     })
}
</div>    
</div>
  )
}
export default Cart