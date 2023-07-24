import React, { useEffect, useState } from "react";
import { items } from "./items";
import "./style.css";
//import logo from "../../../assets/logo3.png"


export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["Full Body","Chest", "Back", "Biceps", "Triceps", "Forearm", "Abdominals", "Legs", "Shoulders"];

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
      <div className="muscle_buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`muscle_button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="muscle-container">
        {filteredItems.map((muscle, idx) => (
          <div key={`items-${idx}`} className="muscle"> 
            <img src={muscle.image} alt="" className='muscle_image'/>

            <span className="muscle_name">{muscle.name}</span>
            <span className="muscle_category">Primary Muscle: {muscle.category}</span>
            <span className="muscle_equipment">Equipment: {muscle.Equipment}</span>

          </div>
        ))}
      </div>
    </div>
  );
}
