import React from 'react'
import "./Testimonials.css"
import { testimonialsData } from '../../../data/Home_data/testimonialsData'

const Testimonials = () => {
  return (
    <div className = "t-container" >
        <div className="t-header">
            <div>
            <span>OUR </span>
            <span>REVIEWS</span>
          </div>
        </div>


        {/* review card*/ }
        <div className="reviews">
            {testimonialsData.map((review,i) =>(
                <div className="review" key = {i}>
                    <div>
                        <img src={review.img} alt="" />
                        <span>{review.name_handle}</span>

                        <img src={review.verify} alt="" />
                        <span>{review.status}</span>
                    </div>

                    <span>{review.text}</span>
                    
                    
                </div>

            ))}
        </div>


    </div>

    
  )
}

export default Testimonials