import React, { useEffect, useState } from "react";
import { items } from "./items";
import "./style.css";
import red_check from "../../../../assets/red_check.png"
import {GoClock} from "react-icons/go"
import {Link,  useHistory} from "react-router-dom"
import swal from "sweetalert"





export default function DifficultyFilters() {
  /*
  let history = useHistory();
  const routeChange = () => {
    let path = '/Virtual_Workout1/Virtual_Workout1';
    history.push(path);
  }*/


  
  
  
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["Easy", "Medium", "Hard"];
  let history = useHistory();

  const IsMemberLoggedIn = (idx) => {
    const isLoggedIn = localStorage.getItem("status");
    if (isLoggedIn == "false"){
      swal({
        title: "You Must Log In to Access This Challenge",
        icon: "warning",
        buttons:"Ok",
        dangerMode: true,
      })
      .then((willLogin) => {
        if (willLogin) {
          history.push("/login")
          window.scroll(100,150);
          
        } 
      });
      
    }

    else if (isLoggedIn === "true") {
     
      localStorage.setItem("challengeID", idx)
      history.push(items[idx].class_link); 

    }
    
  }


  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);

    }
    //console.log(items[0].account)
    //console.log(items[0].account.includes(localStorage.getItem("email")))
    

    
    
  };


  function checkCompletion(idx){
   

    if((String(localStorage.getItem("status"))=="true") && (items[idx].account.includes(localStorage.getItem("email")) == true) && (items[idx].competion_status == true)){

      items[idx].check_mark = red_check
      return items[idx].check_mark
      
    }
  }

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    <div>
      <div className="difficulty_buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`difficulty_button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="virtual_classes-container">
        {filteredItems.map((virtual, idx) => (
          <div key={`items-${idx}`} className="virtual_class">
            <span className="virtual_name">{virtual.name}</span>
            <span className="virtual_time"><GoClock/>{virtual.time}</span>
            <span className="virtual_category">Difficulty: {virtual.category}</span>
            <span className="virtual_workout">{virtual.workout}</span>
            <div className="training_completion">
              <img src = {checkCompletion(idx)} ></img>
            </div>
            
            <button className="btn virtual_class-btn" onClick={() => IsMemberLoggedIn(idx)}>Start Challenge </button>
          </div>
        ))}
      </div>
    </div>
  );
}