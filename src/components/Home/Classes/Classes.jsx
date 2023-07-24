import React from 'react'
import "./Classes.css"
import { classesData } from '../../../data/Home_data/classesData'
import {Link as Linkroll} from "react-scroll"
import {Link, useHistory} from "react-router-dom"




//home page class section
const Classes = () => {
  return (
    <div className = "class-container">
        <div className="class-header">
            <div>
            <span>FITNESS </span>
            <span>CLASSES</span>
          </div>
        </div>


        {/* class card*/ }

        <div className='cardlink'>
            <Link to="/classes" onClick={() => {window.scroll(0,0);}}>
        <div className="classes">

          
          {classesData.map((Class,i) =>(
              
                  <div className="Class" key = {i}>
                    <img src={Class.img} alt="" />
                    <h1>{Class.label}</h1>
                    <span>{Class.text}</span>   
                  </div>

            ))}

              
            
        </div>
        </Link>
            </div>
        
        
                


       

        <div className="class-btn">
        <buttons className="btn">
        <Link to="/classes" onClick={() => {window.scroll(0,0);}}>View More</Link>
        </buttons>
            
        </div>
        


    </div>

    
  )
}

export default Classes