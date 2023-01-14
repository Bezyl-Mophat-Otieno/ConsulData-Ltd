import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalProvider'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function LoginSuccess() {
    const { loginSuccess,setLoginSuccess} = useContext(GlobalContext)
      if(loginSuccess) {
        return  (   <Alert variant="success" onClose={()=>setLoginSuccess()} dismissible>
        <p>Login Successfully.</p>
      </Alert>)
      } else {
        return (      <Alert variant="danger" onClose={()=>setLoginSuccess()} dismissible>
        <Alert.Heading>Login Status</Alert.Heading>
        <p> Incorrect Login Credentials .</p>
      </Alert>)
      }
}
export default LoginSuccess


