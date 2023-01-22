import React from 'react'
import './blogPage.css'
import Blogs from '../../Components/blogs/Blogs'
import BlogSideBar from '../../Components/sideBar/BlogSideBar'
import { GlobalContext } from '../../Components/Context/GlobalProvider'
import Header from '../../Components/Header'
import { useContext } from 'react'
import { useEffect } from 'react'
function BlogPage() {
  const {setUserTemp} = useContext(GlobalContext)
    useEffect(()=>{
      return setUserTemp(true)
    },[])

  return (

    <>
    <Header/>
    <div className='blogPage'>
    <Blogs/>
    <BlogSideBar/>
    </div>

    </>

  )
}

export default BlogPage
