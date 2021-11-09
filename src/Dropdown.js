import React, { useState } from "react";
import "./Dropdown.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";


export const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [heading, setHeading] = useState("Up/Down");
  const [item, setItem] = useState("Rise/Fall");

  const clickHandleActive = (e, current_heading, current_item) => {
    console.log(e.target);
    document.querySelectorAll(".items").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    console.log(current_item, current_heading);
    setItem(current_item);
    setHeading(current_heading);        
    setTimeout(() => {
      setShowDropdown(false);
    },200)
  };

  const dropdownHandler = () => {
    setShowDropdown(true);
    console.log(showDropdown);
  };

  return (
    <>
        <div className = {`contract_current ${showDropdown ? "hider" : ""}`} onClick={dropdownHandler}>
          <span className="type" id="type_heading">
            {heading}
            <span className="arrow_down "></span>
          </span>
          <span className="contract" id="contract_items">
            {item}
          </span>
        </div>
        {<Card clickHandler={clickHandleActive} showDropdown={showDropdown} />}
     
    </>
  );
};

export default Dropdown;
