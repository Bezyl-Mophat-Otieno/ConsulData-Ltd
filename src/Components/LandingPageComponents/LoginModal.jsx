import LoginForm from "./LoginForm"
import LoginSuccess from '../Alerts/LoginSuccess'
import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalProvider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIdBadge } from "@fortawesome/free-solid-svg-icons"
import RegisterForm from "./RegisterForm"
import { Modal } from "react-bootstrap"

 function LoginModal () {
 const {loginSuccess,setLoginSuccess, renderLogModal,setrenderLogModal } = useContext(GlobalContext)
 const toggleModal = ()=>{
  setrenderLogModal((prev)=>{
    return !prev
  })

 }
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

      return ( 
    <>
<div className = 'login-modal'>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                      <h5 class="modal-title" id="exampleModalLabel"> <FontAwesomeIcon icon={faIdBadge} /> </h5>
                      </Modal.Header>
                      <Modal.Body>    
              {loginSuccess ===!undefined && <LoginSuccess/>}
              {renderLogModal ? <LoginForm/> : <RegisterForm/> }
              <div className="d-flex justify-content-center"> Do you have an account ?
               <a href="#" className="text-primary " onClick={toggleModal} >{ renderLogModal ? " Register." : " Login."}</a></div></Modal.Body>
                     <Modal.Footer className='modal-footer'>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                      </Button>
              {/* <button type="button" class="btn btn-secondary btn-danger" data-bs-dismiss="modal" onClick={()=>{setLoginSuccess()
              setrenderLogModal(true)}}>Close</button> */}
                     </Modal.Footer>
                   </Modal>
             </div>
    </>
      )

      

    
}

export default LoginModal

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>
             // <div className = 'login-modal'>
             //       <Modal show={show} onHide={handleClose}>
             //         <Modal.Header closeButton>
             //                  <h5 class="modal-title" id="exampleModalLabel"> <FontAwesomeIcon icon={faIdBadge} /> </h5>
             //         </Modal.Header>
             //         <Modal.Body>          {loginSuccess ===!undefined && <LoginSuccess/>}
            //  {renderLogModal ? <LoginForm/> : <RegisterForm/> }
            //  </div>
            //  <div className="d-flex justify-content-center"> Do you have an account ?
            //   <a href="#" className="text-primary " onClick={toggleModal} >{ renderLogModal ? " Register." : " Login."}</a></div></Modal.Body>
             //         <Modal.Footer className='modal-footer'>
             //           <Button variant="secondary" onClick={handleClose}>
             //             Close
             //           </Button>
            //  <button type="button" class="btn btn-secondary btn-danger" data-bs-dismiss="modal" onClick={()=>{setLoginSuccess()
            //   setrenderLogModal(true)}}>Close</button>
             //         </Modal.Footer>
             //       </Modal>
             //</div>
//     </>
//   );
// }

// render(<Example />);



