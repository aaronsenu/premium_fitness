import React from 'react'
import "./Schedule.css"

import hero from "../../assets/class_hero.png"
import banner_circle1 from "../../assets/banner_circle1.png"
import banner_circle2 from "../../assets/banner_circle2.png"

import {Link} from "react-router-dom"
import {Link as Linkroll} from "react-scroll"

import FacetedSearch from './FacetedSearch/FacetedSearch'

const Schedule = () => {
  return (

    <div className='schedule-page' id = "Schedule">
        <div className='blur schedule-blur'></div>
            <div className='schedule-hero' >
                <div className='left-schedule'> 

        


            {/* Hero Heading */}
            <div className='schedule-text'>
                <div>
                    <span>BOOKING</span>
                </div>

                <div>
                    <span  className = "stroke-text">SCHEDULE <br/></span>
                    <span > CLASSES </span>
                    
                </div>

                <div>
                    <span>BOOK YOUR CLASSESS TODAY!</span>
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
           

            </div>



            <div className='right-schedule'> 
            
            


            {/* banner */}
            <img src={hero} alt="" className='schedule_banner'/>
            <img src={banner_circle1} alt="" className='schedule_banner-circle1'/> {/* Luminosity effect */}
            <img src={banner_circle2} alt="" className='schedule_banner-circle2'/>
            
            </div>

        </div>


        






        <div className='schedule-categories_page' id = "Schedule">

            <div className="schedule-header">
                <div>
                    <span>EXPLORE </span>
                    <span>CLASSES</span>
                </div>
            </div>
            
            <div className='schedule-faceted-header'>
                <div>
                    <span>Class Filters</span>
                </div>
            </div>


            <div className='schedule-classes'>
                <FacetedSearch/>

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

export default Schedule