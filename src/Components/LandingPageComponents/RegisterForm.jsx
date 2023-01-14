import React from 'react'

import RegistrationSuccess from './../Alerts/RegistrationSuccess.jsx';
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalProvider.jsx';
import { faRegistered  } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import LoginModal from './LoginModal.jsx';
import LoginForm from './LoginForm.jsx';
function RegisterForm() {
    const [name , setName] = useState('')
const [password,setPassword] = useState('')
const [email,setEmail] = useState('')
const [ConfirmP,setConfirmP] = useState('')
const [nameInputErr,setnameInputErr] = useState(false)
const [emailInputErr,setemailInputErr] = useState(false)
const [passwordInputErr,setpasswordInputErr] = useState(false)
const [confirmPInputErr,setconfirmPInputErr] = useState(false)
const [match,setMatch] = useState()


// extracting the setLearner prop passed from the Context api
const {setLearner,registerSuccess,setRegisterSuccess,learner } = useContext (GlobalContext)
let validationErrorCount = 0;


const inputValidation = ()=>{

  if (name === ''){
    setnameInputErr(true)
    validationErrorCount++

  }else{
    setnameInputErr(false)
  }
  if (email === ''){
    setemailInputErr(true)
    validationErrorCount++
  }else{
    setemailInputErr(false)
  }
  if (password === ''){
    setpasswordInputErr(true)
    validationErrorCount++
  }else{
    setpasswordInputErr(false)
  }
  if (ConfirmP === ''){
    validationErrorCount++
    setconfirmPInputErr(true)
  }else{
    setconfirmPInputErr(false)
    }

    if(password === ConfirmP){
      setMatch(true)
    }else {
      validationErrorCount++
      setMatch(false)
    }
    return validationErrorCount;

}
const successRegistration = ()=>{
    setRegisterSuccess(true)
    setLearner({name, email,password,ConfirmP})
    localStorage.setItem('learner',JSON.stringify({name,email,password,ConfirmP}))
      setPassword('')
      setConfirmP('')
      console.log(learner)
    }
    const handleRegister = (event) =>{
      event.preventDefault()
       const errors = inputValidation()
       if(errors <= 0) {
       successRegistration()
       }else {
        console.log("Correct the errors first")
       }
       
      
    }

  return (
<form onSubmit={handleRegister}>
  <div class="mb-3 ms-5 me-5 d-flex">
    <label for="exampleInputEmail1" class="form-label me-4"> <FontAwesomeIcon icon={faUser} /> </label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="nameHelp"
     placeholder="Full Name" aria-label="Full Name" onChange={(e)=>setName(e.target.value)} value={name}/>
  </div>
     { nameInputErr  &&  <div  className="form-text text-danger d-flex justify-content-center">This field cannot be empty </div> }
  <div class="mb-3 ms-5 me-5 d-flex">
    <label for="exampleInputEmail1" class="form-label me-4"><FontAwesomeIcon icon={faEnvelope} /></label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
      placeholder="Email Address" aria-label="Email Address" onChange={(e)=>setEmail(e.target.value)} value={email}/>
  </div>
     { emailInputErr  &&  <div  className="form-text text-danger d-flex justify-content-center">This field cannot be empty </div> }
  <div class="mb-3 ms-5 me-5 d-flex">
    <label for="exampleInputPassword1" class="form-label me-4"><FontAwesomeIcon icon={faKey} /></label>
    <input type="password" class="form-control" id="exampleInputPassword1"
       placeholder="Password" aria-label="Password"  onChange={(e)=>setPassword(e.target.value)} value={password}

    />
  </div>
       { passwordInputErr ? <div className="form-text text-danger d-flex justify-content-center">
       This field cannot be empty </div> : match ? '' :
        <div  className="form-text text-danger d-flex justify-content-center">Passwords do not match . </div>  }
  <div class="mb-3 ms-5 me-5 d-flex">
    <label for="exampleInputPassword1" class="form-label me-4"><FontAwesomeIcon icon={faKey} /></label>
    <input type="password" class="form-control" id="exampleInputPassword1"
       placeholder="Confirm Password" aria-label="Password"  onChange={(e)=>setConfirmP(e.target.value)} value={ConfirmP}/>
  </div>
  { passwordInputErr ? <div className="form-text text-danger d-flex justify-content-center">
       This field cannot be empty </div> : match ? '' :
        <div  className="form-text text-danger d-flex justify-content-center">Passwords do not match . </div>  }  <div class=" d-flex justify-content-center mb-3 ">
  <button type="submit" class="btn btnRegister ">Register <FontAwesomeIcon icon={faRegistered} /></button>
  </div>
</form>          )
}

export default RegisterForm