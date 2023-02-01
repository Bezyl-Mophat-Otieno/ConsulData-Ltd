import React from 'react'
import './About.css'
import { useEffect } from 'react'
import {useContext} from 'react'
import { GlobalContext } from '../../Components/Context/GlobalProvider'
import protoImage from '../../Images/ImageResources/python.jpg'
function About() {
  const {setUserTemp} = useContext(GlobalContext)
  useEffect(()=>{
    return setUserTemp(true)
  },[])
  return (
    <div className="aboutPost">
    <div className="aboutPostWrapper">
      <img
        className="aboutPostImg"
        src={protoImage}
        alt=""
      />
      <h1 className="aboutPostTitle">
      ConsuliData Limited Company.
      </h1>

      <div className="aboutPostInfo">

        <span>
        P.O BOX:
          <b className="aboutPostAuthor">
              80100-76
          </b>
        </span> <br/>      
        <span>
        LOCATION:
          <b className="aboutPostAuthor">
              Kisii-Kenya
          </b>
        </span> <br/> 
        <span>
         TELL NO:
          <b className="aboutPostAuthor">
            34567890287 
          </b>
        </span> <br/>
        <span>
         EMAIL:
          <b className="aboutPostAuthor">
            crs.kisii@gmail.com
          </b>
          </span> <br/>
          <span>
         Website:
          <b className="aboutPostAuthor">
          https://crs.kisii.com
          </b>
        </span> <br/>
      </div>
      <span>
         Mananaging Director:
          <b className="aboutPostAuthor">
              Deida 
          </b>
        </span> <br/>
      <p className="aboutPostDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
        quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
        Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
        eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
        error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
        impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
        odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit modi eos!
        <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
        quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
        Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
        eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
        error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
        impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
        odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
        iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
        a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
      </p>
    </div>
  </div>
  )
}

export default About