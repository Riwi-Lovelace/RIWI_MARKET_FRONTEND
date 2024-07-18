import React, { useState, useRef, useEffect } from "react";


let SearchEd = "";


export const SearchRed = ()=>{

    const [searched, SetSearched] = useState("");


  const keyPress = (event) => {
    if (event.key === "Enter") {
      SearchEd !== "" ? localStorage.setItem("search" , SearchEd): null;
      window.location.href = "/search"
    }
  };
  const handleChanged = (event) => {
    SearchEd = event.target.value;
    SetSearched(event.target.value);

  };

        
    return(
        <div className="input-box">
        <input
          type="text"
          placeholder="Search"
          className="inputSearchGeneric"
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}

          //param of keypress
              onChange={handleChanged}
              onKeyDown={keyPress}
        />
            <i class="fa-solid fa-plus"></i>
        </div>
    )
}