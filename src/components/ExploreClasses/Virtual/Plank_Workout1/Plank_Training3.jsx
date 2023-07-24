import React from 'react'
import "./Plank_Training3.css"
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import plank from "../../../../assets/plank.gif"
import {Link,  useHistory} from "react-router-dom"
import { items } from '../DifficultyFilters/items';
import swal from 'sweetalert';
const Training3 = () => {

  let history = useHistory();
  const challengeCompleted = () => {
      items[localStorage.getItem("challengeID")].competion_status = true;
         
        swal({
          title: "Congratulations!",
          text: "You Have Successfully Completed This Challenge!",
          icon: "success",
          button: "Keep Going!",
        });
      if(items[localStorage.getItem("challengeID")].account.includes(localStorage.getItem("email"))==false){
        items[localStorage.getItem("challengeID")].account.push(localStorage.getItem("email"))
      }
      history.push("/classes/virtual"); 
      
  
      
    
  }

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return(
              <div className='challenge'>

                

                <div className='challenge-timer'>
                  <CountdownCircleTimer
                      isPlaying
                      duration={300}
                      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                      colorsTime={[7, 5, 2, 0]}
                      onComplete={() => [true, 1000]}
                    >

                    {renderTime2}
                  </CountdownCircleTimer>
                </div>
              </div>
        
        )
        
               
        }
      
        return (
          <div className="workout_timer1">
            <div className="workout_text1">Challenge will begin in</div>
            <div className="workout_value1">{remainingTime}</div>
            <div className="workout_text1">seconds</div>
          </div>
        );
      };


      const renderTime2 = ({ remainingTime }) => {
        if (remainingTime === 0) {
          challengeCompleted()
          
            
            return (
             
            <div className="success">

                <CountdownCircleTimer
                  isPlaying
                  duration={10}
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[7, 5, 2, 0]}
                  onComplete={() => [true, 1000]}
                >
                  {renderTime2}
                  
                </CountdownCircleTimer>
    
            </div>


            
              
              
              );
            
                
        }
         if ((remainingTime <=20) && (remainingTime>0)){
          return(
          <div className="workout_timer1">
            <div className="workout_text1">  HOLD ON. </div>
            <div className="workout_value1">{remainingTime}</div>
            <div className="workout_text1"> Almost There!</div>
          </div>
          );

        }

         else if (remainingTime <= 100 && remainingTime>10){
          return(
          <div className="workout_timer1">
            <div className="workout_text1"> Keep Going.</div>
            <div className="workout_value1">{remainingTime}</div>
            <div className="workout_text1"> Almost There!</div>
          </div>
          );

        }


         else if (remainingTime <= 150 && remainingTime>20){
          return(
          <div className="workout_timer1">
            <div className="workout_text1">You Are</div>
            <div className="workout_value1">{remainingTime}</div>
            <div className="workout_text1">Halfway There!</div>
          </div>
          );
        }


         else if (remainingTime <= 200 && remainingTime>30){
          return(
          <div className="workout_timer1">
            <div className="workout_text1">You Are Almost</div>
            <div className="workout_value1">{remainingTime}</div>
            <div className="workout_text1">Halfway There!</div>
          </div>
          );

        }

         else if (remainingTime <= 250 && remainingTime>40){
          return(

            <div className="workout_timer1">
            <div className="workout_text1">You Are</div>
            <div className="workout_value1">{remainingTime}</div>
            <div className="workout_text1">Doing Great!</div>
          </div>
            

          );
          

        }

        else{
          return(

            <div className="workout_timer1">
            <div className="workout_text1">Remaining:</div>
            <div className="workout_value1">{remainingTime}</div>
            <div className="workout_text1">Seconds</div>
          </div>
            

          );

        }




        

       

        







}

      
    return (
            <div className="workout_Timer">
             
              <div className="workout_timer-wrapper">
                <div className='challenge-header'>
                  <h1>PLANK CHALLENGE</h1>

                  <div className='virtual_plank'>
                  <img src={plank} alt="" />
                  </div>
                  
                  </div>
                  </div>

                <div className='ready-timer'>
                
                      <CountdownCircleTimer
                  isPlaying
                  duration={1}
                  colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                  colorsTime={[7, 5, 2, 0]}
                  onComplete={() => [true, 1000]}
                >
                  {renderTime}
                  
                </CountdownCircleTimer>
        </div>


        
              
        
        </div>
      );
    
}
  

export default Training3
        