import React from 'react'
import "./Sports.css"

import hero from "../../assets/sports_hero.png"
import gymA from "../../assets/gymA.jpg"
import banner_circle2 from "../../assets/banner_circle2.png"

import {Link} from "react-router-dom"
import {Link as Linkroll} from "react-scroll"


const Sports = () => {
  return (

    <div className='sports-page' id = "Sports">
        <div className='blur sports-blur'></div>
        <div className='sports-hero' >
            <div className='left-sports'> 

     


        {/* Hero Heading */}
        <div className='sports-text'>
            <div>
                <span>SPORTS</span>
            </div>

            <div>
                <span  className = "stroke-text">PREMIUM <br/></span>
                <span>SPORTS</span>
            </div>

            <div>
                <span>LIFTING HEAVY WEIGHTS <br/>ISN'T THE ONLY WAY TO GET IN A QUICK WORKOUT...<br/></span>
                <span>COME TRY OUT OUR BASKETBALL COURTS!</span>
            </div>

        </div>

        {/* figures */}

        <div className="figures">
          <div>
            <span>150+</span>
            <span>LOCATIONS</span>
          </div>

          <div>
            <span>960+ </span>
            <span>MEMBERS</span>
          </div>

          <div>
            <span>230+ </span>
            <span>EXPERT TRAINERS</span>
          </div>
        </div>


        {/* Buttons */}
        <div className="sports_hero-button">
          <buttons className="btn">
          <Linkroll 
                  to = "Category"
                  spy={true}
                  smooth={true}
                  >Get Started</Linkroll>
          </buttons>
          
          
        </div>

        </div>



        <div className='right-sports'> 
        
          


        {/* banner */}
        <img src={hero} alt="" className='sports_banner'/>
        
        
        </div>

    </div>

    
    <div className='courts'>
        <div className='ball-court'>
            <img src={gymA} alt="" />
            <div className='court-text'>
                <h1>GYM A <br/></h1>
                <span>Open Gym <br/></span>
                <span>Available During Club Hours</span>
            </div>
            
        </div>
        
    </div>

    
    </div>
      )
    }
    
    export default Sports