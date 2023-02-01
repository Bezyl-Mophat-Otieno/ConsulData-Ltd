import React from 'react'
import './Blogs.css'
import Blog from '../blog/Blog'
import { Link } from 'react-router-dom'
function Blogs() {
  return (
    <div className='blogs'>
    <Link to='/blogs/singleblog'><Blog/></Link>
    <Link to='/blogs/singleblog'><Blog/></Link>
    <Link to='/blogs/singleblog'><Blog/></Link>
    <Link to='/blogs/singleblog'><Blog/></Link>
    <Link to='/blogs/singleblog'><Blog/></Link>
    <Link to='/blogs/singleblog'><Blog/></Link>
    <Link to='/blogs/singleblog'><Blog/></Link>
    <Link to='/blogs/singleblog'><Blog/></Link>
    <Link to='/blogs/singleblog'><Blog/></Link>
    <Link to='/blogs/singleblog'><Blog/></Link>
    </div>
  )
}

export default Blogs