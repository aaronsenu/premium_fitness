import React, { useEffect, useState } from "react";
import { items } from "./items";
import "./style.css";
import logo from "../../../../assets/logo3.png"
import {Link} from "react-router-dom"

export default function MultiFilters() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  let filters = ["Low", "Medium", "High"];

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
      <div className="intensity_buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`intensity_button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb_classes-container">
        {filteredItems.map((mb_class, idx) => (
          <div key={`items-${idx}`} className="mb_class">
            <span className="mb_name">{mb_class.name}</span>
            <img src={logo} alt="" className='mb_class_logo'/>
            <span className="mb_category">{mb_class.category} Intensity</span>
            <span className="mb_class_description">{mb_class.text}</span>
            <button className="btn mb_class-btn"><Link to="/schedule"
                onClick={() => {
                  window.scroll(0, 0);
                }}>View Schedule </Link> </button>
          </div>
        ))}
      </div>
    </div>
  );
}
