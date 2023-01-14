import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import menuItems from '../../Items'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useReducer } from 'react'
function SideBar({children}) {
    const [isOpen,setIsOpen] = useState(true)
    const toggle = ()=>{
     return    setIsOpen((prev)=>{
            return !prev
        })

    }
    // using UseReducer to Manage All state Logic of the Menu Items
    const initialState = {
            showDash:true,
            showAllCourses:false,
            showMyCourses:true,
            showNotePad:false,
            showCategories:false,
            showContacts:false,
            showTutorials:false
    }
    //useReducer Implementation
const reducer = ()=>{
    
}

const [state , dispatch] = useReducer(reducer,initialState)

    return (
        <div className='SideBar-Container'>
        <div className='side-bar' style={{ width:isOpen ? "300px" : "40px"}}>
           <div className='top-section'>
                  <h1 className='logo' style={{ display:isOpen ? "block" : "none"}}>Logo</h1>
            <div className='bars' onClick={toggle}  style={{ marginLeft:isOpen ? "50px" : "0"}}> <FontAwesomeIcon icon={faBars}/></div>
           </div>
       <div className='menu-Items'>
     {
        menuItems.map((item)=>{
            // The Other div will carry the Icons
            return <div className='link d-flex ' style={{ display:isOpen ? "block" : "none"}} >  
            <span class><FontAwesomeIcon icon={item.icon}/> </span>
            <div><Link className='d-block text-light' to={item.path}> {item.name} </Link></div>
            </div> 
        })
     }

       </div>
        </div>
        <main>{children}</main>
   </div>
    );
 
};

export default SideBar