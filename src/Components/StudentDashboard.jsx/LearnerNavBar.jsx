import  { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faLandMineOn } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../LandingPageComponents/SearchBar';
import { GlobalContext } from './../Context/GlobalProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import protoImage from '../../Images/ImageResources/blogger.jpg';
function LearnerNavBar() {
  const {state} = useContext(GlobalContext)
  return (
    <>
          <Navbar bg="light" expand="lg" >
            <Container >
              <Navbar.Brand href="/"> CRS <FontAwesomeIcon  icon={faGraduationCap}/>  </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                  { (state.showAllCourses || state.showMyCourses ) && <SearchBar/> }
                  <Nav className='d-flex'>
                  <div className="topRight">
                   <Link to="/">
                        <img className="profilePic" src={protoImage} alt="" />
                   </Link>
                   </div>
                    <Nav.Link href='/' className=' w-5 ms-5   text-danger' >  
                    Log-out <FontAwesomeIcon  icon={faLandMineOn}/>
                    </Nav.Link>
                  </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </>
  )
}

export default LearnerNavBar