import React from 'react'
import './newBlog.css'
function NewBlog() {
  return (
    <div className="write">
    <h1 className='headerTittles'>Add Some Notes</h1>
    <img
      className="writeImg"
      src="https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt=""
      
    />
  
    <form className="writeForm">
 <div className='writeFormGroup' >

<select placeholder='Language' id='fileInput' class="form-select form-select-sm mt-5 w-25" aria-label=".form-select-sm example">
<option  selected disabled  > Language </option>
<option value="1">English</option>
<option value="2">Kiswahili</option>
<option value="3">Local Dilect</option>
</select>

     </div>
      <div className="writeFormGroup">
        <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus"></i>
        </label>
        <input id="fileInput" type="file" style={{ display: "none" }} />
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
        Publish
      </button>
    </form>
  </div>
  )
}

export default NewBlog