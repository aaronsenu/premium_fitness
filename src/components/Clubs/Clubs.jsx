import React from 'react'
import "./Clubs.css"
import {MdLocationPin, MdPhone, MdEmail} from "react-icons/md";
import map from "../../assets/map.png"
import hours from "../../assets/hours.png"
import Trainer from './Trainer/Trainer';
import {Link} from "react-router-dom"
import {Link as Linkroll} from "react-scroll"

const Clubs = () => {
  return (
    <div className='clubs' id = "Clubs">
      <div className='club-hero' >
            <div className='left-cl'> 

     


        {/* Hero Heading */}
        <div className='club-text'>
            <div>
                <span>CLUBS</span>
            </div>

            <div>
                <span  className = "stroke-text">PREMIUM</span>
                <span><br/>CLUBS</span>
            </div>

            <div>
                <span>
                  FIND YOUR HOME CLUB 
                  START WORKING OUT NOW!
                </span>
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
        <div className="club_hero-button">
          <buttons className="btn">
          <Linkroll 
                  to = "find_clubs"
                  spy={true}
                  smooth={true}
                  >Get Started</Linkroll>
          </buttons>
          
          
        </div>

        </div>

    </div>











    <div className = "clubs-container" id="find_clubs">
        <div className="clubs-header">
            <div>
            <span><MdLocationPin/>CLUBS</span>
            <span>NEAR YOU</span>
            


          </div>
        </div>


        <div className='club-info'>
          <div className='infos'>
            <span> <MdLocationPin/> 235 Cooper St. Ottawa, ON K2P 0G2</span>
            <span> <MdEmail/>info.PF@gmail.com</span>
            <span><MdPhone/>(628) 450 - 7828</span>
          
          <div className='images'>
            <img src={map} alt="" />
            <img src={hours} alt="" />
          
          


          </div>
          </div>
          
         
          
          
          


          


        </div>


        


    </div>

    <div>
      <Trainer/>
    </div>

    </div>

    
  )
}

export default Clubs