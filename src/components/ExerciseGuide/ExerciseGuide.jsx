import React from 'react'
import "./ExerciseGuide.css"


import hero from "../../assets/class_hero.png"
import banner_circle1 from "../../assets/banner_circle1.png"
import banner_circle2 from "../../assets/banner_circle2.png"

import {Link} from "react-router-dom"
import {Link as Linkroll} from "react-scroll"

import MuscleFilters from './MuscleGroupFilters/MuscleGroupFilters'

const ExerciseGuide = () => {
  return (

    <div className='exercise-page' id = "Exercise">
        <div className='blur exercise-blur'></div>
            <div className='exercise-hero' >
                <div className='left-exercise'> 

        


            {/* Hero Heading */}
            <div className='exercise-text'>
                <div>
                    <span>DATABASE</span>
                </div>

                <div>
                    <span  className = "stroke-text">EXERCISE <br/></span>
                    
                </div>

                <div>
                    <span>GUIDE</span>
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
            <div className="exercise_hero-button">
            <buttons className="btn">
            <Linkroll 
                    to = "Category"
                    spy={true}
                    smooth={true}
                    >Get Started</Linkroll>
            </buttons>
            
            
            </div>

            </div>



            <div className='right-exercise'> 
            
            


            {/* banner */}
            <img src={hero} alt="" className='exercise_banner'/>
            <img src={banner_circle1} alt="" className='exercise_banner-circle1'/> {/* Luminosity effect */}
            <img src={banner_circle2} alt="" className='exercise_banner-circle2'/>
            
            </div>

        </div>


        






        <div className='exercise-categories_page'>

            <div className="ex-header">
                <div>
                    <span>  EXERCISE </span>
                    <span>DATABASE </span>
                   
                </div>
            </div>
            
            <div className='ex-muscle-header'>
                <div>
                    <span>MUSCLE GROUPS</span>
                </div>
            </div>


            <div className='exercise-classes'>
                <MuscleFilters/>

            </div>
            
        </div>
    
    </div>

    
  )
}

export default ExerciseGuide