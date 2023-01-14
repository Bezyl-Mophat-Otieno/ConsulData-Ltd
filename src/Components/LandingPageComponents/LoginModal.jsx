import LoginForm from "./LoginForm"
import LoginSuccess from '../Alerts/LoginSuccess'
import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalProvider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIdBadge } from "@fortawesome/free-solid-svg-icons"
import RegisterForm from "./RegisterForm"

 function LoginModal () {
 const {loginSuccess,setLoginSuccess, renderLogModal,setrenderLogModal } = useContext(GlobalContext)
 const toggleModal = ()=>{
  setrenderLogModal((prev)=>{
    return !prev
  })

 }

      return ( 
    <>
     <div class="modal fade " id="login-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-center">
            <h5 class="modal-title" id="exampleModalLabel"> <FontAwesomeIcon icon={faIdBadge} /> </h5>
          </div>
          <div class="modal-body">
          {loginSuccess ===!undefined && <LoginSuccess/>}
             {renderLogModal ? <LoginForm/> : <RegisterForm/> }
        </div>
        <div className="d-flex justify-content-center"> Do you have an account ? <a href="#" className="text-primary " onClick={toggleModal} >{ renderLogModal ? " Register." : " Login."}</a></div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary btn-danger" data-bs-dismiss="modal" onClick={()=>{setLoginSuccess()
              setrenderLogModal(true)}}>Close</button>
          </div>
        </div>
      </div>
    </div>
    </>
      )
    
}

export default LoginModal



