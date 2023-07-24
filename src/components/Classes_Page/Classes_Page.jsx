import React from 'react'
import "./Classes_Page.css"
import cardio from "../../assets/cardio.png";
import cycling from "../../assets/cycling.png";
import strength from "../../assets/strength.png";
import yoga from "../../assets/yoga.png";
import dance from "../../assets/dance.jpeg";
import pool from "../../assets/pool.jpeg";
import hero from "../../assets/class_hero.png"
import banner_circle1 from "../../assets/banner_circle1.png"
import banner_circle2 from "../../assets/banner_circle2.png"
import virtual from "../../assets/virtual.jpg"
import {Link} from "react-router-dom"
import {Link as Linkroll} from "react-scroll"


const Classes_Page = () => {
  return (

    <div className='class-page' id = "Classes">
        <div className='blur class-blur'></div>
        <div className='class-hero' >
            <div className='left-c'> 

     


        {/* Hero Heading */}
        <div className='class-text'>
            <div>
                <span>CLASSES</span>
            </div>

            <div>
                <span  className = "stroke-text">FITNESS <br/></span>
                <span>CLASSES</span>
            </div>

            <div>
                <span>WORKING OUT ALONE CAN GET BORING AND DEMORALIZING.<br/> COME AND JOIN OUR FITNESS CLASSES WHERE YOU WILL WORKOUT <br/> IN A FUN, SUPPORTIVE AND ENGAGING ENVIRONMENT<br/> LED BY OUR CERITFIED INSTRUCTORS. 
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
        <div className="class_hero-button">
          <buttons className="btn">
          <Linkroll 
                  to = "Category"
                  spy={true}
                  smooth={true}
                  >Get Started</Linkroll>
          </buttons>
          
          
        </div>

        </div>



        <div className='right-c'> 
        
          


        {/* banner */}
        <img src={hero} alt="" className='class_banner'/>
        <img src={banner_circle1} alt="" className='class_banner-circle1'/> {/* Luminosity effect */}
        <img src={banner_circle2} alt="" className='class_banner-circle2'/>
        
        </div>

    </div>
       


        <div className = "category-container" id="Category">
            <div className="category-header">
                <div>
                <span>CLASS</span>
                <span>CATEGORIES</span>
                </div>
            </div>



            <div className='class_categories'>
                <div className='class_row'>
                    <div className="class_category-container">
                        <div className="class_category">
                            <img src={strength} alt="" className='class_image'/>
                            <span className="class_name">STRENGTH</span>
                            <span className="class_text">Our Strength classes focuses on building muscle: from top to bottom. Build muscle, achieve your weight loss goals </span>
                            <div className='class-button'>
                                <div className='classlink'>
                                    <Link to = "/classes/strength" 
                                    onClick={() => {
                                        window.scroll(0,0);}
                                    }><buttons className="btn">Explore Classes</buttons></Link>
                                </div>
                            </div>                    
                        </div>
                    </div>



                    <div className="class_category-container">
                        <div className="class_category">
                            <img src={cardio} alt="" className='class_image'/>
                            <span className="class_name">CARDIO</span>
                            <span className="class_text">Break a sweat</span>
                            <div className='class-button'>
                                <div className='classlink'>
                                    <Link to = "/classes/cardio" 
                                    onClick={() => {
                                        window.scroll(0,0);}
                                    }><buttons className="btn">Explore Classes</buttons></Link>
                                </div>
                            </div>                    
                        </div>
                    </div>




                    <div className="class_category-container">
                        <div className="class_category">
                            <img src={yoga} alt="" className='class_image'/>
                            <span className="class_name">MIND & BODY</span>
                            <span className="class_text">Calm your Mind</span>
                            <div className='class-button'>
                                <div className='classlink'>
                                    <Link to = "/classes/mind_body" 
                                    onClick={() => {
                                        window.scroll(0,0);}
                                    }><buttons className="btn">Explore Classes</buttons></Link>
                                </div>
                            </div>                    
                        </div>
                    </div>

                </div>





                <div className='class_row'>
                    <div className="class_category-container">
                        <div className="class_category">
                            <img src={cycling} alt="" className='class_image'/>
                            <span className="class_name">CYCLING</span>
                            <span className="class_text">Cardio on Bikes</span>
                            <div className='class-button'>
                                <div className='classlink'>
                                    <Link to = "/classes/cycling" 
                                    onClick={() => {
                                        window.scroll(0,0);}
                                    }><buttons className="btn">Explore Classes</buttons></Link>
                                </div>
                            </div>                    
                        </div>
                    </div>



                    <div className="class_category-container">
                        <div className="class_category">
                            <img src={dance} alt="" className='class_image'/>
                            <span className="class_name">DANCE</span>
                            <span className="class_text">Have fun and loosen up as our instructors leads the class</span>
                            <div className='class-button'>
                                <div className='classlink'>
                                    <Link to = "/classes/dance" 
                                    onClick={() => {
                                        window.scroll(0,0);}
                                    }><buttons className="btn">Explore Classes</buttons></Link>
                                </div>
                            </div>                    
                        </div>
                    </div>




                    <div className="class_category-container">
                        <div className="class_category">
                            <img src={pool} alt="" className='class_image'/>
                            <span className="class_name">AQUA</span>
                            <span className="class_text">CardioVascular exercises and muscle conditioning </span>
                            <div className='class-button'>
                                <div className='classlink'>
                                    <Link to = "/classes/aqua" 
                                    onClick={() => {
                                        window.scroll(0,0);}
                                    }><buttons className="btn">Explore Classes</buttons></Link>
                                </div>
                            </div>                    
                        </div>
                    </div>

                </div>


                <div className='class_row'>
                    <div className="class_category-container">
                        <div className="class_category">
                            <img src={virtual} alt="" className='class_image'/>
                            <span className="class_name">VIRTUAL TRAINING</span>
                            <span className="class_text">Exercise Challenges </span>
                            <div className='class-button'>
                                <div className='classlink'>
                                    <Link to = "/classes/virtual" 
                                    onClick={() => {
                                        window.scroll(0,0);}
                                     }><buttons className="btn">Explore Classes</buttons></Link>
                                </div>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <div className='class_categories'>
                    <div className='class'>
                        <img src={strength} alt="" />
                        <span className='class_name'>STRENGTH</span>
                        <span className='class_text'> </span>
                        <div className='class-button'>
                            <div className='classlink'>
                                <Link to = "/classes/strength" 
                                onClick={() => {
                                    window.scroll(0,0);}
                                }><buttons className="btn">Explore Classes</buttons></Link>
                            </div>
                        </div>
                    </div>
            </div>
                            */}



    



        </div>

                    

            








            


    </div>
    

    
  )
}

export default Classes_Page