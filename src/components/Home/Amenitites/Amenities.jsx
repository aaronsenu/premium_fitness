import React from 'react'
import "./Amenities.css"
import red_check from "../../../assets/red_check.png"
import amenity_img from "../../../assets/amenity-img.jpg"
import ua from "../../../assets/under_armour.png"
import nike from "../../../assets/nike.png"
import addidas from "../../../assets/adidas.png"
import {Link} from "react-router-dom"
const Amenities = () => {
  return (
    <div className = "amenities-container">
        <div className="amenities-header">
            <span className='stroke-text'>FEATURED</span>
            <span>AMENITIES</span>
        </div>
        
        <div className="left-a">
            <div className='amenities'>
                <div className='details-1'>

                    <div>
                        <img src={red_check} alt=""></img>
                        <span>Premium Training Equipment</span>
                    </div>

                    <div>
                        <img src={red_check} alt=""></img>
                        <span>Personal Training</span>
                    </div>

                    <div>
                        <img src={red_check} alt=""></img>
                        <span>Group Fitness Classes</span>
                    </div>

                    <div>
                        <img src={red_check} alt=""></img>
                        <span>Spa & Sauna</span>
                    </div>

                    
                
                </div>

                <div className='details-2'>
            
                    <div>
                        <img src={red_check} alt=""></img>
                        <span>Swimming Pools</span>
                    </div>

                    <div>
                        <img src={red_check} alt=""></img>
                        <span>Basketball Courts</span>
                    </div>

                    <div>
                        <img src={red_check} alt=""></img>
                        <span>Squash Courts</span>
                    </div>

                    <div>
                        <img src={red_check} alt=""></img>
                        <span>Kick Boxing & much more</span>
                    
                    
                    </div>
                
                </div>
            </div>

            

            <div className="partners-1">
                <img src={nike} alt="" />
                <img src={addidas} alt="" />
                <img src={ua} alt="" />
                
            </div>

            <div className="partners-2">
                <img src={nike} alt="" />
                <img src={addidas} alt="" />
                <img src={ua} alt="" />
                
            </div>


            <div className="amenity-button">
                            <div className='amenity_button-link'>
                                <Link to="/membership"
                                onClick={() => {
                                    window.scroll(0, 0);
                                  }}>
                                    <buttons className="btn">Become a Member</buttons>
                                </Link>
                                
                            </div>                
                        </div>
        </div>
    </div>

    
  )
}

export default Amenities