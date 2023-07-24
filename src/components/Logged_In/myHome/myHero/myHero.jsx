import React from 'react'
import "./myHero.css"
import hero from "../../../../assets/home_hero.png"
import banner_circle1 from "../../../../assets/banner_circle1.png"
import banner_circle2 from "../../../../assets/banner_circle2.png"
import {Link} from "react-router-dom"
function myHome() {
  return (
    <div className='myHero' id = "myHero">
      <div className='blur myHero-blur'></div>
        <div className='left-myHero'> 


        {/* Hero Heading */}
        <div className='myHero-text'>
          
          <div>
            <span  className='stroke-text'>Hi  </span>
            <span>{localStorage.getItem("name")},</span>
          </div>

        

          <div>
            <span>HAS ANYONE TOLD YOU HOW GREAT YOU ARE DOING? <br/> </span>
            <span>KEEP UP THE </span>
            <span>GOOD </span>
            <span>WORK!</span>
          </div>

         

        </div>

        {/* figures */}

       


        {/* Buttons */}
        
        <button className="btn aq_class-btn"><Link to="/exercise"
                onClick={() => {
                  window.scroll(0, 0);
                }}>Database </Link> </button>
        

        </div>



        <div className='right-myHero'> 
        
          


        {/* banner */}
        <img src={hero} alt="" className='myHero_banner'/>
        <img src={banner_circle1} alt="" className='myHero_banner-circle1'/> {/* Luminosity effect */}
        <img src={banner_circle2} alt="" className='myHero_banner-circle2'/>
        
        </div>

    </div>
  )
}

export default myHome