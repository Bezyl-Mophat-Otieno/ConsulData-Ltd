import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { GlobalContext } from './../Context/GlobalProvider';
import { Link } from 'react-router-dom';
function SearchBar() {
const {setSearchTerm,searchTerm , setSearching , searching } = useContext(GlobalContext)
 const onFieldChange = (e)=>{
  setSearchTerm(e.target.value)
  setSearching(true)
 }
  return (
    // Controlled component
    <div className='col-12 col-md-4'>
    <form class="d-flex  ">
        <input class="form-control me-2" type="search" placeholder="Search Course" aria-label="Search"
         onChange={onFieldChange} value={searchTerm} />
         <Link to={``} ><button class="btn btn-outline-dark" type="submit" > 
         <FontAwesomeIcon  icon={faSearch}/> </button></Link>
        
      </form>
  </div>
  )
}

export default SearchBar
