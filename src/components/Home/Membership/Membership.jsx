import React from 'react'
import "./Membership.css"
import { plansData } from '../../../data/Home_data/plansData'
import {Link ,useHistory} from "react-router-dom"
import swal from "sweetalert"




const Membership = () => {
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
    <div className = "plans-container">
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>

        <div className="plans-header">
            <div>
            <span>MEMBERSHIP </span>
            <span>PLANS</span>
          </div>
        </div>

        {/* plans card*/ }
        <div className="plans">
            {plansData.map((plan,i) =>(
                <div className="plan" key = {i}>

                    <span>{plan.name}</span>
                    <span>${plan.price}</span>
                    <div className='membership_week'>
                    <span>Bi-Weekly</span>
                    </div>
                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={plan.check} alt="check mark bullet pt"  className='membership_check'/>
                                <span key = {i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        

                        <div className='membership-link'>
                                <Link to="/membership"
                                onClick={() => {
                                    window.scroll(0, 0);
                                  }}>
                                     <span>View More -&gt;</span>
                                </Link>
                                
                            </div>  
                        
                    </div>
                    <button className="btn" onClick={() => goToCheckout(plan.name, plan.price)}>Get Started</button>


                </div>

            ))}
        </div>


    </div>

    
  )
}

export default Membership
