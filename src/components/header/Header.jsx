import React, { useState } from "react";
// Style imports
import "../../components/header/headerStyles.css";
// Logo imports
import logo from "../../assets/logo/Logos.webp";
// Import of section start modal
import { ModalSesion } from "../modals-sesions/modalLogin.jsx";
// Import Search bar
import { SearchBar } from "../search-bar/SearchBar.jsx";

export const Header = () => {
  
  // Status to open the user modal
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  // Status to change color of the section start button
  const [isUserFocused, setIsUserFocused] = useState(false);
  // Status to change the color of the cart start button
  const [isCartFocused, setIsCartFocused] = useState(false);
  // Status to open the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to open the modal and make the button change color
  const handleLoginClick = () => {
    setIsModalLoginOpen(!isModalLoginOpen);
    setIsUserFocused(!isUserFocused);
  };

  return (
    <> 
      {/**Logo */}
      <header className="header relative z-50">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Kiwi logo" className="logo-img" />
          </a>
        </div>

        {/**Component Search bar */}
        <SearchBar isMenuOpen={isMenuOpen} />

        {/**Shopping cart button */}
        <div className={`icons ${isMenuOpen ? "open" : ""}`}>
          <button
            onClick={() => setIsCartFocused(!isCartFocused)}
            className={`icon-btn cart-btn ${isCartFocused ? "focused" : ""}`}
          >
            <i className="fas fa-shopping-cart icon cart"></i>
          </button>

          {/**Section start button */}
          <button
            onClick={handleLoginClick}
            className={`icon-btn user-btn ${isUserFocused ? "focused" : ""}`}
          >
            <i className="fas fa-user icon user"></i>
          </button>
        </div>

        {/**Button to open hamburger menu */}
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className="fas fa-bars icon"></i>
        </button>

        {/*Conditional to show modal*/}   
        {isModalLoginOpen && <ModalSesion active={isModalLoginOpen} />}
      </header>
    </>
  );
};
