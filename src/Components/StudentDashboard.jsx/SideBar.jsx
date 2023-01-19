import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { faBookOpen} from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../Context/GlobalProvider'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
function SideBar({children}) {
   const {reducer , state , dispatch , initialState} = useContext(GlobalContext)
    const [isOpen,setIsOpen] = useState(true)
    const toggle = ()=>{
     return    setIsOpen((prev)=>{
            return !prev
        })
    }
    
    const allCourses = ()=>{
    
        dispatch({type:"Allcourses"})
        

    }
    
    const myCourses = ()=>{
      
      dispatch({type:"MyCourses"})        
    }
    
    const myGrades = ()=>{
        dispatch({type:"MyGrades"}) 
        
    }
    
    const allResources = ()=>{
       dispatch({type:"Resources"})
        
    }
    
    const myCart = ()=>{
     dispatch({type:"Cart"})
 
        
    }
    
    const about = ()=>{
        dispatch({type:"About"})
        
    }
  
    const myNotepad = ()=>{
        dispatch({type:"NotePad"})
        
    }

    return (
        <div className='SideBar-Container'>
        <div className='side-bar' style={{ width:isOpen ? "300px" : "40px"}}>
           <div className='top-section'>
                  <h1 className='logo' style={{ display:isOpen ? "block" : "none"}}>Logo</h1>
            <div className='bars' onClick={toggle}  style={{ marginLeft:isOpen ? "50px" : "0"}}> <FontAwesomeIcon icon={faBars}/></div>
           </div>
       <div className='menu-Items'>
            <div className='link d-flex ' onClick={allCourses} style={{ display:isOpen ? "block" : "none"}} >  
            <span class><FontAwesomeIcon icon={faBookOpen}/> </span>
            <div><Link className='d-block text-light'> All Courses</Link></div>
            </div>
            <div className='link d-flex ' onClick={myCourses} style={{ display:isOpen ? "block" : "none"}} >  
            <span class><FontAwesomeIcon icon={faBookOpenReader}/> </span>
            <div><Link className='d-block text-light' > MyCourses</Link></div>
            </div>
            <div className='link d-flex ' onClick={myGrades} style={{ display:isOpen ? "block" : "none"}} >  
            <span class><FontAwesomeIcon icon={faCalculator}/> </span>
            <div><Link className='d-block text-light' > Grades & Assessments </Link></div>
            </div>
            <div className='link d-flex ' onClick={allResources} style={{ display:isOpen ? "block" : "none"}} >  
            <span class><FontAwesomeIcon icon={faListAlt}/> </span>
            <div><Link className='d-block text-light' > Resources</Link></div>
            </div>
            <div className='link d-flex ' onClick={myNotepad} style={{ display:isOpen ? "block" : "none"}} >  
            <span class><FontAwesomeIcon icon={faBookOpen}/> </span>
            <div><Link className='d-block text-light' > NotePad</Link></div>
             </div>
             <div className='link d-flex ' onClick={myCart} style={{ display:isOpen ? "block" : "none"}} >  
            <span class><FontAwesomeIcon icon={faShoppingCart}/> </span>
            <div><Link className='d-block text-light' > cart</Link></div>
             </div>
             <div className='link d-flex ' onClick={about} style={{ display:isOpen ? "block" : "none"}} >  
            <span class><FontAwesomeIcon icon={faInfo}/> </span>
            <div><Link className='d-block text-light' >About</Link></div>
             </div>
            
    
    

       </div>
        </div>
        <main>{children}</main>
   </div>
    );
 
};

export default SideBar