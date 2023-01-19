import React from 'react'
import { useParams } from 'react-router-dom'
import courses from '../../data'
import protoImage from '../../Images/ImageResources/project.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



function SearchResults() {
  const {searchTerm} = useParams()
  const results = courses.filter((course)=>{
  return   course.name.match(searchTerm)
  } )
  console.log(results)
          if(results.length>0){

            return (
             <div class="row row-cols-1 row-cols-md-3 g-4">
             {
         
                      
                 results.map((result)=>{
                   const{id,name,price} = result
                     return <div class="col">
                     <a href='#'>
                    <div className="card course" key={id}>
                    
                   <img src={protoImage} className="card-img-top  course-thumbnail" alt=""/>
                   <div className="card-body">
                     <h5 className="card-title course-tittle">{name}</h5>
                     <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                   </div>
                   <div className=" d-flex justify-content-center mb-3 ">
               <button type="submit" className="btn call-to-action">  <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
               <div className='ms-5 price-tag'>ksh {price}/= </div>
               </div>
                 </div>
                 </a>
               </div>
                  })
             }
             </div> 
              )
          } else {
            return <div className='d-flex justify-content-center '>
            <h5 className='fw-bold fs-5'> No results That Much Your Search ...  </h5>

            </div>
          }
}

export default SearchResults