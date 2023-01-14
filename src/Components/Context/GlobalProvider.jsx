import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const GlobalContext = createContext()
function GlobalProvider({children}) {
    const [learner,setLearner] = useState ({})
    const [loginSuccess,setLoginSuccess] = useState()
    const [registerSuccess,setRegisterSuccess] = useState()
    const [searching , setSearching ]= useState(false)
    const [searchTerm , setSearchTerm] = useState('')
    const [renderRegModal ,setrenderRegModal ] = useState(true)
    const [renderLogModal ,setrenderLogModal] = useState(true)
  return (
    <GlobalContext.Provider value = {{
        learner,
        setLearner,
        loginSuccess,
        setLoginSuccess,
        registerSuccess,
        setRegisterSuccess,
        searching,
        setSearching,
        searchTerm,
        setSearchTerm,
        renderRegModal
         ,setrenderRegModal ,
         renderLogModal 
         ,setrenderLogModal,
    }}>

           {children}
    </GlobalContext.Provider>

    )
}

export default GlobalProvider