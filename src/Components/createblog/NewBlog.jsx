import React from 'react'
import './newBlog.css'
import protoImage from '../../Images/ImageResources/notePad.jpg'
function NewBlog() {
  return (
    <div className="write  ">
    <h1 className='headerTittles'>Add Some Notes</h1>
    <img
      className="writeImg"
      src={protoImage}
      alt=""
      
    />
  
    <form className="writeForm">
 <div className='writeFormGroup' >
     </div>
      <div className="writeFormGroup">
        <input
          className="writeInput"
          placeholder="Title"
          type="text"
          autoFocus={true}
        /> .;j/
      </div>
      <div className="writeFormGroup">
        <textarea
          className="writeInput writeText"
          placeholder="Tell your story..."
          type="text"
          autoFocus={true}
        />
      </div>
      <button className="writeSubmit" type="submit">
       Save
      </button>
    </form>
  </div>
  )
}

export default NewBlog