import React, { useEffect, useState } from "react";
import { items } from "./items";
import {useHistory} from "react-router-dom"
import "./style.css";
import logo from "../../../assets/logo3.png"
import {GoClock} from "react-icons/go"
import swal from "sweetalert"
import { Database } from "../../../data/Database";




export default function FacetedSearch() {
  let history = useHistory();
  
  const IsMemberLoggedIn = (name, date, time) => {
    const isLoggedIn = localStorage.getItem("status");
    const id = localStorage.getItem("ID");
    console.log(id)
    
    if (isLoggedIn == "false"){
      swal({
        title: "You Must Log In to Book a Class",
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

    else if (isLoggedIn === "true"){
      const isMember_plus = Database[id].membership
    
      //console.log(id, isMember_plus)
      if ((isMember_plus[0]==true ) &&( (isMember_plus[1] == "PREMIUM PLAN")  || (isMember_plus[1] == "ULTIMATTE PLAN")) ) {
        
        Database[id].classes.push([name, date, time, ])
        console.log(localStorage.getItem("classes"))
        swal({
          title: "Class Booked ",
          icon: "success",
          buttons:"Book Again",
        })
        
      }
      else{
        swal({
          title: "Restricted Access! You must have a Premium or an Ultimate Plan to book a class ",
          icon: "error",
          buttons:"Ok",
          dangerMode: true,
        })
  
      }
      

    }
    /*
    */
    
  }
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["Cardio", "Cycling", "Dance", "Mind & Body", "Aqua", "Strength"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

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
      <div className="faceted_buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`faceted_button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="schedule_classes-container">
        {filteredItems.map((schedule_class, idx) => (
          <div key={`items-${idx}`} className="schedule_class">
            <span className="schedule_name">{schedule_class.name}</span>
            <span className="schedule_category"> {schedule_class.category}</span>
            <span className="schedule_instructor">Instructor: {schedule_class.Instructor}</span>
            <span className="schedule_duration"><GoClock/> {schedule_class.duration}</span>
            <span className="schedule_date">When: {schedule_class.Date} at</span>
            <span className="schedule_time">{schedule_class.time}</span>

            <img src={logo} alt="" className='schedule_class_logo'/>
            <button className="btn schedule_class-btn" onClick={() => IsMemberLoggedIn(schedule_class.name, schedule_class.Date, schedule_class.time)}>Book Class </button>
          </div>
        ))}
      </div>
    </div>
  );
}
