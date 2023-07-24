import React from 'react'
import "./Hero.css"
import hero from "../../../assets/home_hero.png"
import banner_circle1 from "../../../assets/banner_circle1.png"
import banner_circle2 from "../../../assets/banner_circle2.png"
import {Link} from "react-router-dom"
function Hero() {
  return (
    <div className='hero' id = "Home">
      <div className='blur hero-blur'></div>
        <div className='left-h'> 

      {/* <Navbar/> */}  
        
      {/* the best ad */}
        <div className='the-best-ad'>
          <div></div>
          <span>THE BEST FITNESS CLUB IN TOWN</span>
        </div>


        {/* Hero Heading */}
        <div className='hero-text'>
          
          <div>
            <span  className = "stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>

          <div>
            <span>IDEAL BODY</span>
          </div>

          <div>
            <span>TAKE YOURSELF TO A WHOLE NEW LEVEL</span>
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
        <div className="hero-button">
          
            <div className='membership_link'>
              <Link to = "/membership" 
                onClick={() => {window.scroll(0,0);}}>
                  <buttons className="btn">Get Started</buttons></Link>
            </div>
          </div>

        </div>



        <div className='right-h'> 
        
          


        {/* banner */}
        <img src={hero} alt="" className='banner'/>
        <img src={banner_circle1} alt="" className='banner-circle1'/> {/* Luminosity effect */}
        <img src={banner_circle2} alt="" className='banner-circle2'/>
        
        </div>

    </div>
  )
}

export default Hero