import React, { useState } from "react";
// Style imports 
import "../../components/header/headerStyles.css";

export const SearchBar = ({ isMenuOpen }) => {

  // Status to change the color of the search bar
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  // Status to save the search value
  const [searched, setSearched] = useState("");

  // Function to manage changes in input
  const handleChanged = (event) => {
    setSearched(event.target.value);
  };

  // Logic for the bar to search after hitting enter 
  const keyPress = (event) => {
    if (event.key === "Enter" && searched !== "") {
      localStorage.setItem("search", searched);
      window.location.href = "/search";
    }
  };

  return (
    <div className={`search-bar ${isMenuOpen ? "open" : ""}`}>
      <input
        type="text"
        placeholder="Search"
        className={isSearchFocused ? "focused" : ""}
        onFocus={() => setIsSearchFocused(true)}
        onBlur={() => setIsSearchFocused(false)}
        //Params of keypress 
        onChange={handleChanged}
        onKeyDown={keyPress}
      />
      <i className={`fas fa-search search-icon ${isSearchFocused ? "focused-icon" : ""}`}></i>
    </div>
  );
};
