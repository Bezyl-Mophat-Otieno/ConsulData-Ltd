import React from 'react'
import { Outlet } from 'react-router-dom'
import HeroesSection from './LandingPageComponents/HeroesSection'
import NavBar from './LandingPageComponents/NavBar'
import Footer from './Footer'

function SharedLayoutMain({user}) {
  return (
    <div>

        <NavBar/>
       {<HeroesSection/>}
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default SharedLayoutMain