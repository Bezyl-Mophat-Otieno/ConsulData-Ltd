import React from 'react'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered  } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal'


function NavBar() {
  // useEffect(()=>{
  // const allCat = courses.map((course)=>{
  //   return course.category
  // })
  //  console.log(allCat)
  // },[])
  return (
<>
<RegisterModal/>
<LoginModal/>
      <Navbar bg="light" expand="lg" >
        <Container >
          <Navbar.Brand href="/"> CRS <FontAwesomeIcon  icon={faGraduationCap}/>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/" className='fw-bold'  > HOME </Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
              <Nav className='d-flex'>
                <Nav.Item className=' w-5 ms-5 btn btn-outline-dark'  data-bs-toggle="modal" data-bs-target="#register-modal"> 
                 Register <FontAwesomeIcon  icon={faRegistered}/></Nav.Item>
                <Nav.Item  className=' w-5 ms-5 btn btn-outline-dark' data-bs-toggle="modal" data-bs-target="#login-modal">  
                Login <FontAwesomeIcon  icon={faSignInAlt}/>
                </Nav.Item>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
</>
    );
  }
  

export default NavBar                     