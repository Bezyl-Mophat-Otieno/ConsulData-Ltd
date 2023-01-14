import React from 'react'
import RegistrationSuccess from './../Alerts/RegistrationSuccess.jsx';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalContext } from '../Context/GlobalProvider.jsx';
import { useContext } from 'react';
import RegisterForm from './RegisterForm.jsx';
import LoginForm from './LoginForm.jsx';
function RegisterModal() {
  const {registerSuccess,setRegisterSuccess, renderRegModal,setrenderRegModal ,} = useContext(GlobalContext)
   const toggleModal = ()=>{
    setrenderRegModal((prev)=>{
      return !prev
    })

   }

  return (
<>
 

 
<div class="modal fade " id="register-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header d-flex justify-content-center">
        <h5 class="modal-title" id="exampleModalLabel"><FontAwesomeIcon icon={faIdCard}/></h5>
      </div>
      <div class="modal-body">
      {registerSuccess ===!undefined && <RegistrationSuccess/>}
      {renderRegModal ? <RegisterForm/> : <LoginForm/> }
    </div>
    <div className="d-flex justify-content-center"> Do you have an account ? <a href="#" className="text-primary " onClick={toggleModal} > { renderRegModal ? " Login." : " Register."}</a></div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-danger" data-bs-dismiss="modal" onClick={()=>{setRegisterSuccess() 
        setrenderRegModal(true) }} >Close</button>
      </div>
    </div>
  </div>
</div>
 

</>
  )
}

export default RegisterModal