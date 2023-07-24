import React from 'react'
import "./Virtual.css"

import hero from "../../../assets/class_hero.png"
import banner_circle1 from "../../../assets/banner_circle1.png"
import banner_circle2 from "../../../assets/banner_circle2.png"

import {Link} from "react-router-dom"
import {Link as Linkroll} from "react-scroll"

import DifficultyFilters from './DifficultyFilters/DifficultyFilters'

const Virtual = () => {
  return (

    <div className='virtual-page' id = "Virtual">
        <div className='blur virtual-blur'></div>
            <div className='virtual-hero' >
                <div className='left-virtual'> 

        


            {/* Hero Heading */}
            <div className='virtual-text'>
                <div>
                    <span>CLASS CATEGORIES</span>
                </div>

                <div>
                    <span  className = "stroke-text">VIRTUAL <br/></span>
                    <span> TRAINING<br/></span>
                    
                </div>

                <div>
                    <span>WORKOUTS THAT CAN BE DONE ANYWHERE, ANYTIME</span>
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
            <div className="virtual_hero-button">
            <button className="btn virtual_hero-button"><Link to="/exercise"
                onClick={() => {
                  window.scroll(0, 0);
                }}>Database </Link> </button>
            
            
            </div>

            </div>



            <div className='right-virtual'> 
            
            


            {/* banner */}
            <img src={hero} alt="" className='virtual_banner'/>
            <img src={banner_circle1} alt="" className='virtual_banner-circle1'/> {/* Luminosity effect */}
            <img src={banner_circle2} alt="" className='virtual_banner-circle2'/>
            
            </div>

        </div>


        






        <div className='virtual-categories_page'>

            <div className="virtual-header">
                <div>
                    <span>WORKOUT  </span>
                    <span>CHALLENGES</span>
                </div>
            </div>
            
            <div className='virtual-intensity-header'>
                <div>
                    <span>Difficulty Levels</span>
                </div>
            </div>


            <div className='virtual-classes'>
                <DifficultyFilters/>

            </div>
            </div>
    
    </div>

    
  )
}

export default Virtual
        



        

