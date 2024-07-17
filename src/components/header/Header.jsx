import React, { useState, useRef, useEffect } from "react";
// Css header
import "../../components/header/headerStyles.css";
// Logo riwi
import logo from "../../assets/logo/Logos.webp";
// Modal
import { ModalSesion } from "../modals-sesions/modalLogin.jsx";




let SearchEd = "";

export const Header = () => {

    // Para abrir el modal de user
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

         // Para que el icono del user cambie de color
        const [isUserFocused, setIsUserFocused] = useState(false);
  //---------------
  // Para que el icono del carrito cambie de color
  const [isCartFocused, setIsCartFocused] = useState(false);

  useEffect(() => {
    if(isModalLoginOpen){
      setIsCartFocused(false)
    }
    if(isCartFocused){
      setIsModalLoginOpen(false)
      setIsUserFocused(false)
    }

}, [isModalLoginOpen,isCartFocused]);
  //------------------

  // Para abrir el menu hamburguesa
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Para que el icono de la barra de busqueda cambie de color
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  //-------------------------------------
  //guardar valor de busqueda escrito
  const [searched, SetSearched] = useState("");

  // Funcion para el icono del login
  const handleLoginClick = () => {
    setIsModalLoginOpen(!isModalLoginOpen);
    setIsUserFocused(!isUserFocused);
  };

//Logica para detectar enter y guardar la b
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
  return (
    <header className="header">
      {/*Logo*/}
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Kiwi logo" className="logo-img" />
        </a>
      </div>

      {/*Barra de busqueda*/}
      <div className={`search-bar ${isMenuOpen ? "open" : ""}`}>
        <input
          type="text"
          placeholder="Search"
          className={isSearchFocused ? "focused" : ""}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}

          //param of keypress
              onChange={handleChanged}
              onKeyDown={keyPress}
        />
        <i className={`fas fa-search search-icon ${isSearchFocused ? "focused-icon" : ""}`}></i>
      </div>

      {/*Iconos del carrito y user*/}
      <div className={`icons ${isMenuOpen ? "open" : ""}`}>

        <button
          onClick={() => setIsCartFocused(!isCartFocused)}
          className={`icon-btn cart-btn ${isCartFocused ? "focused" : ""}`}
        >
          <i className="fas fa-shopping-cart icon cart"></i>
        </button>

        <button
          onClick={handleLoginClick}
          className={`icon-btn user-btn ${isUserFocused ? "focused" : ""}`}

        >
          <i className="fas fa-user icon user"></i>
        </button>
      </div>

      {/*Boton para abrir el menu hamburguesa*/}
      <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <i className="fas fa-bars icon"></i>
      </button>

      {/*Condicional para mostrar el modal*/}      
      {isModalLoginOpen && (
        <ModalSesion
          active={isModalLoginOpen}
        />
      )}
    </header>
  );
};
