import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalProvider'
import { Alert } from 'bootstrap'
function RegistrationSuccess() {
  const {registerSuccess,setRegisterSuccess} = useContext(GlobalContext)
  if(registerSuccess) {
    return  (   <Alert variant="success" onClose={()=>setRegisterSuccess()} dismissible>
    <p>Registration successFul , You Can now Log in .</p>
  </Alert>)
  } else {
    return (      <Alert variant="danger" onClose={()=>setRegisterSuccess()} dismissible>
    <p> Something Went Wrong .</p>
  </Alert>)
  }
}

export default RegistrationSuccess