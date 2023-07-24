import MyHero from "./myHero/myHero";
import { Database } from "../../../data/Database";

//import Navbar from "./components/Navbar/Navbar"


function Home() {
  function displayClasses(){
    const id = localStorage.getItem("ID");
    if (Database[id].classes.length >1){
      for (let i = 1; i<Database[id].classes.length; i++){
        return ("You have a" + Database[id].classes[i][0]+ " Class on "+ Database[id].classes[i][1] +" at " +Database[id].classes[i][2] +"\n" )
      }
    }
  
         

  }
    return (
      <div className='myHome' id = "myHome">
      
        <MyHero/>


        <div className="myNav">

          <div className="myClasses">
            <h1> </h1>
            <span>{displayClasses()}</span>
            
          </div>
          
          




        </div>
        
      </div>
    )
  
}
  
  export default Home;