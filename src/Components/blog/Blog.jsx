import React from 'react'
import './Blog.css'
import protoImage from '../../Images/ImageResources/cybersecurity.jpg'
function Blog() {
  return (
    <div className="blog">
    <img
      className="blogImg"
      src={protoImage}
      alt=""
    />
    <div className="blogInfo">
      <div className="blogCats">
        <span className="blogCat">
            Music
        </span>
        <span className="blogCat">
            Life
        </span>
      </div>
      <span className="blogTitle">
          Lorem ipsum dolor sit amet
      </span>
      <hr />
      <span className="blogDate">1 hour ago</span>
    </div>
    <p className="blogDesc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
      fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
      atque, exercitationem quibusdam, reiciendis odio laboriosam?
    </p>
  </div>
  )
}

export default Blog