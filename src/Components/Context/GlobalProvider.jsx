import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import {useReducer} from 'react'
export const GlobalContext = createContext()
function GlobalProvider({children}) {
    const [learner,setLearner] = useState ({})
    const [loginSuccess,setLoginSuccess] = useState()
    const [registerSuccess,setRegisterSuccess] = useState()
    const [searching , setSearching ]= useState(false)
    const [searchTerm , setSearchTerm] = useState('')
    const [renderRegModal ,setrenderRegModal ] = useState(true)
    const [renderLogModal ,setrenderLogModal] = useState(true)
  // using UseReducer to Manage All state Logic of the Menu Items
  const initialState = {
    showDash:true,
    showAllCourses:false,
    showMyCourses:true,
    showNotePad:false,
    showResources:false,
    showAbout:false,
    showCart:false
}

const reducer = (state,action)=>{
  switch (action.type) {
    case "Allcourses":
      return { ...initialState,showAllCourses:true,showMyCourses:false}
      case "MyCourses":
        return { ...initialState , showAllCourses : false}
        case "NotePad":
          return { ...initialState , showNotePad : true , showAllCourses:false,showMyCourses:false}
            case "Resources":
              return { ...initialState , showResources : true , showAllCourses:false,showMyCourses:false}
              case "About":
                return { ...initialState , showAbout : true , showAllCourses:false,showMyCourses:false}
                  case "Cart" :
                    return { ...initialState , showCart : true , showAllCourses:false,showMyCourses:false}
              
      
  default:
    return state
  }

}

const [state , dispatch] = useReducer(reducer,initialState)

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
        renderRegModal,
        setrenderRegModal,
        renderLogModal, 
        setrenderLogModal,
        reducer,dispatch,state
    }}>

           {children}
    </GlobalContext.Provider>

    )
}

export default GlobalProvider