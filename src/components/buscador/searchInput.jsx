import React, { useState, useRef, useEffect } from "react";


let SearchEd = "";


export const SearchRed = ({activeModal})=>{
    //Icon active 
    const [activeChild,SetactiveChild ] = useState(false);

  const keyPress = (event) => {
    if (event.key === "Enter") {
      SearchEd !== "" ? localStorage.setItem("search" , SearchEd): null;
      window.location.href = "/search"
    }
  };
  const handleChanged = (event) => {
    SearchEd = event.target.value;

  };
    useEffect(() => {
        SetactiveChild(activeModal == true)
    }, [activeChild]);
    
    return(
        <div className="input-box">
        <input
          type= "text"
          placeholder=  "Search"
          className=  "inputSearchGeneric"
          //param of keypress
            onChange={handleChanged}
            onKeyDown={keyPress}
        />
          {
            activeChild ? (
              <i class="fa-solid fa-check" ></i>
            ) : (
              <i class="fa-solid fa-plus" ></i>
            )
          }
        </div>
    )
}