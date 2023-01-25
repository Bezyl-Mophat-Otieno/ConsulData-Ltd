import React from 'react'
import './blogSideBar.css'
import protoImage from '../../Images/ImageResources/blogger.jpg'
import { Link } from 'react-router-dom'
function BlogSideBar() {
  return (
    <div className="sidebar">
    <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT AUTHOR</span>
      <Link to=''></Link>
      <img className='profilePic'
        src={protoImage}
        alt=""
      />
      <p>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
        amet ex esse.Sunt eu ut nostrud id quis proident.
      </p>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">
            Life
        </li>
        <li className="sidebarListItem">
            Music
        </li>
        <li className="sidebarListItem">
            Sport
        </li>
        <li className="sidebarListItem">
            Style
        </li>
        <li className="sidebarListItem">
            Tech
        </li>
        <li className="sidebarListItem">
            Cinema
        </li>
      </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
    </div>
  </div> 
  )
}

export default BlogSideBar