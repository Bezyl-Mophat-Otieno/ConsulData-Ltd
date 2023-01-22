import React from 'react'
import './Header.css'
import protoImage from '../Images/ImageResources/analytics.jpg'
function Header() {
  return (
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitleSm">ConsuliData Ltd </span>
      <span className="headerTitleLg">BLOG</span>
    </div>
    <img
      className="headerImg"
      src={protoImage}
      alt=""
    />
  </div>
  )
}

export default Header