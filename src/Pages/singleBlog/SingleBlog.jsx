
import React from 'react'
import BlogSideBar from '../../Components/sideBar/BlogSideBar'
import Blog from '../../Components/blog/Blog'
import CompleteB from './../../Components/completeBlog/CompleteB';

function SingleBlog() {
  return (
    <div className='single d-flex'>
    <CompleteB/>
    <BlogSideBar/>
    </div>
  )
}

export default SingleBlog