import React from 'react'
import "./Cycling.css"
import "../../../App.css"

import hero from "../../../assets/class_hero.png"
import banner_circle1 from "../../../assets/banner_circle1.png"
import banner_circle2 from "../../../assets/banner_circle2.png"

import {Link} from "react-router-dom"
import {Link as Linkroll} from "react-scroll"

import IntensityFilters from './IntensityFilters/IntensityFilters'


const Strength = () => {
  return (

    <div className='cycling-page' id = "Cycling">
        <div className='blur cycling-blur'></div>
            <div className='cycling-hero' >
                <div className='left-cl'> 

        


            {/* Hero Heading */}
            <div className='cycling-text'>
                <div>
                    <span>CLASS CATEGORIES</span>
                </div>

                <div>
                    <span  className = "stroke-text">CYCLING <br/></span>
                    
                </div>

                <div>
                    <span>CLASSES THAT FOCUSES ON BUILDING MUSSCLE MASS</span>
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
            <div className="cycling_hero-button">
            <buttons className="btn">
            <Linkroll 
                    to = "Category"
                    spy={true}
                    smooth={true}
                    >Get Started</Linkroll>
            </buttons>
            
            
            </div>

            </div>



            <div className='right-cl'> 
            
            


            {/* banner */}
            <img src={hero} alt="" className='cycling_banner'/>
            <img src={banner_circle1} alt="" className='cycling_banner-circle1'/> {/* Luminosity effect */}
            <img src={banner_circle2} alt="" className='cycling_banner-circle2'/>
            
            </div>

        </div>


        






        <div className='cycling-categories_page'>

            <div className="cl-header">
                <div>
                    <span>EXPLORE </span>
                    <span>CLASSES</span>
                </div>
            </div>
            
            <div className='cl-intensity-header'>
                <div>
                    <span>Intensity Levels</span>
                </div>
            </div>


            <div className='cycling-classes'>
                <IntensityFilters/>

            </div>

        



        















        

        

        {/*
        <div className='categories'>
                <div className='row'>
                    <div className='category'>
                        
                        
                        <h1>Swimming Marathon</h1>
                        <span>MEDIUM/HIGH INTENSITY</span>
                        <span>This CORE Strength class will challenge your entire core front to back, top to bottom. Sure to ignite a fire in your belly this class will focus on functional movement to improve power, strength and stabilization preparing the body for daily tasks.</span>
                        <div className="class-button">
                        <buttons className="btn">View Schedule</buttons>
                        </div>         
                    </div>

                    <div className='category'>
                    
                       
                        <h1>LAPS</h1>
                        <span>LOW/MEDIUM INTENSITY</span>
                        <span>Define and strengthen your body in this muscle conditioning class. Instructors will take you through a series of exercises and provide options for all fitness levels. As these classes vary at each location, please reach out to the Club for more information.</span>
                        <div className="class-button">
                        <buttons className="btn">View Schedule</buttons>
                    </div>         
                </div>
            </div>
  </div>*/}



        </div>
    
    </div>

    
  )
}

export default Strength