import React from 'react'
import "./Trainer.css"
//import  {trainerData}  from '../../data/trainerData'
import t1 from "../../../assets/trainer1.jpg";
import t2 from "../../../assets/trainer2.jpg";
import t3 from "../../../assets/trainer3.jpg";
import t4 from "../../../assets/trainer4.jpg";


const Trainer = () => {
  return (
    <div className = "trainer-container" id='Trainer'>
        <div className="trainer-header">
            <div>
            <span>OUR </span>
            <span>TRAINERS</span>
          </div>
        </div>


        <div className='trainers'>
          <div className='trainer'>
            <img src={t1} alt="" />
            <span>John Doe</span>
            <span>Fitness Trainer</span>
          </div>

          <div className='trainer'>
            <img src={t3} alt="" />
            <span>Jane Doe</span>
            <span>Personal Trainer</span>
          </div>

          <div className='trainer'>
            <img src={t2} alt="" />
            <span>Jack Doe</span>
            <span>Sports Trainer</span>
          </div>


          <div className='trainer'>
            <img src={t4} alt="" />
            <span>Jake Doe</span>
            <span>Personal Trainer</span>
          </div>

        </div>


        

        

    </div>

    
  )
}

export default Trainer