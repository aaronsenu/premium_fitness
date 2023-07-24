import React from 'react'
import "./Membership_page.css"
import hero from "../../assets/membership_hero.png"
import banner_circle1 from "../../assets/banner_circle1.png"
import banner_circle2 from "../../assets/banner_circle2.png"
import { plansData } from '../../data/membership_pageData'
import swal from "sweetalert"
import {useHistory} from "react-router-dom"

import {Link as Linkroll} from "react-scroll"
function Membership_page() {
  let history = useHistory();
    const goToCheckout = (name, price) => {
        const isLoggedIn = localStorage.getItem("status");
        if (isLoggedIn == "false"){
          swal({
            title: "You Must Log In First Before Choosing a Membership Plan",
            icon: "warning",
            buttons:"Ok",
          })
          .then((willLogin) => {
            if (willLogin) {
              history.push("/login")
              window.scroll(100,150);
              
            } 
          });
          
        }
    
        else if (isLoggedIn === "true") {
            localStorage.setItem("membership_name", name)
            localStorage.setItem("membership_price", price)
            history.push("/checkout");
            window.scroll(0,0);
         
        }
        
      }
  return (
    <div className='membership-page' id = "Membership">
      <div className='membership-hero'>
      <div className='blur membership-blur'></div>
        <div className='left-m'> 

        {/* Hero Heading */}
        <div className='membership-text'>
            <div>
                <span>MEMBERSHIP</span>
            </div>

            <div>
                <span  className = "stroke-text">START YOUR <br/></span>
                <span>JOURNEY NOW!</span>
            </div>

            <div>
                <span>JOIN OUR COMMUNITY AND START WORKING OUT RIGHT AWAY!
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
        <div className="membership-button">
        <buttons className="btn">
          <Linkroll 
                  to = "Membership_plans"
                  spy={true}
                  smooth={true}
                  >Get Started</Linkroll>
          </buttons>
          
          
        </div>

        </div>



        <div className='right-m'> 
        
          


        {/* banner */}
        <img src={hero} alt="" className='membership_banner'/>
        <img src={banner_circle1} alt="" className='membership_banner-circle1'/> {/* Luminosity effect */}
        <img src={banner_circle2} alt="" className='membership_banner-circle2'/>
        
        </div>

        </div>

        <div className='membership-steps'>
          <div className='steps-header'>
              <span>HOW TO <br/></span>
              <span>BECOME<br/></span>
              <span>A MEMBER<br/></span>
            
            </div>
          

          <div className='steps'>
              <div className='row-1'>
                <div className='step-card-1'>
                    <h1>1</h1>
                    <span>Choose Home Club</span>
                </div>

                <div className='step-card-2'>
                    <h1>2</h1>
                    <span>Select a Membership Plan</span>
                </div>

                <div className='step-card-3'>
                    <h1>3</h1>
                    <span>Complete the Checkout</span>
                </div>
              </div>

              <div className='row-2'>
              <div className='step-card-4'>
                    <h1>4</h1>
                    <span>Get your Premium Fitness Acess Card</span>
                </div>

                <div className='step-card-5'>
                    <h1>5</h1>
                    <span>Get to the Gym and Work Out!</span>
                </div>


              </div>

           


          </div>

        </div>

        

        <div className = "m_page_plans-container" id = "Membership_plans">
        <div className='blur m_page_plans-blur-1'></div>
        <div className='blur m_page_plans-blur-2'></div>

        <div className="m_page_plans-header">
            <div>
            <span>MEMBERSHIP </span>
            <span>PLANS</span>
          </div>
        </div>

        {/* plans card*/ }
        <div className="m_page_plans">
            {plansData.map((plan,i) =>(
                <div className="m_page_plan" key = {i}>

                    <span>{plan.name}</span>
                    <span>${plan.price}</span>
                    <div className='membership_week'>
                      <span>Bi-Weekly</span>
                    </div>
                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={plan.check} alt="" />
                                <span key = {i}>{feature}</span>
                            </div>
                        ))}
                    </div>
              
                    <button className="btn"  onClick={() => goToCheckout(plan.name, plan.price)}>Get Started</button>


                </div>

            ))}
        </div>


    </div>


























        

    </div>
  )
}

export default Membership_page