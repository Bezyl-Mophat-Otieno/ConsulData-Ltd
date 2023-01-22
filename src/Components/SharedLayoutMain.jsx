import React from 'react'
import { Outlet } from 'react-router-dom'
import HeroesSection from './LandingPageComponents/HeroesSection'
import NavBar from './LandingPageComponents/NavBar'
import Footer from './Footer'
import { useContext } from 'react'
import { GlobalContext } from './Context/GlobalProvider'

function SharedLayoutMain({user}) {
  const {userTemp} = useContext(GlobalContext)
   
  return (
    <div>

        <NavBar/>
       { !userTemp | undefined &&  <HeroesSection/>}
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default SharedLayoutMain