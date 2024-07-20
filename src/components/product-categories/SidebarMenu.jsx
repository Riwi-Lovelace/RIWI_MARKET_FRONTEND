import React, { useState } from "react";
import "./../product-categories/SidebarMenu.css";
import "../../custom/private/definedStyles.css";

export const SidebarMenu = ({minPrice,
                            maxPrice,
                            setMinPrice,
                            setMaxPrice,
                            filterProduct,
                            categories,
                            selectCategory,
                            setSelectCategory}) => {

  // Estado para abrir el menu desplegable
  const [openSection, setOpenSection] = useState(null);
  // Estado para activar el icono del boton (la flechita)
  const [activeButton, setActiveButton] = useState(null);
  // Estado para mantener el estilo del botón clicado
  const [clickedButton, setClickedButton] = useState(null);

  // Función para el menu desplegable
  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
      setActiveButton(null);
      setClickedButton(null);
    } else {
      setOpenSection(section);
      setActiveButton(section);
      setClickedButton(section);
    }
  };

  // Funtion para calcular el busqueda
  const handlerPrice = () => {
    filterProduct();
  }

  // Funtion para limpiar los filtros
  const handleClear = () => {
    setMinPrice(0);
    setMaxPrice(0);
    setSelectCategory("");
    filterProduct();
  }

  return (
    <div className="menu-container p-2 mt-20 md:w-50 lg:w-60 ml-2">

      {/* Precio */}
      <button
        className={`btn-menu flex justify-between items-center w-full p-4 bg-gray-300 rounded-md mb-3 h-10 ${
          openSection === "price" || clickedButton === "price" ? "active" : ""
        }`}
        onClick={() => toggleSection("price")}
      >
        <div>
          <i
            className={`fa-solid fa-dollar-sign mr-2 ${
              openSection === "price" || clickedButton === "price"
                ? "text-white"
                : "text-gray-500"
            }`}
          ></i>
          <span
            className={`font-bold text-sm ${
              openSection === "price" || clickedButton === "price"? "text-white" : "text-gray-500"}`}>Price</span>
        </div>
        <i
          className={`fa-solid ${
            openSection === "price" ? "fa-caret-down" : "fa-caret-right"} ${openSection === "price" || clickedButton === "price" ? "text-white" : "text-gray-500"
          }`}
        ></i>
      </button>
      {openSection === "price" && (
        <div className="flex flex-col p-3 bg-gray-200 rounded-md mb-3 ">
          {/*Buscar el minPrice */}
          <label className="mb-1 text-gray-800 font-bold text-sm">Min Price: <span className="text-price">$ {minPrice}</span> </label>
          <input type="range" min="0" max="1000" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="mb-3"/>
          {/*Buscar el maxPrice */}
          <label className="mb-1 font-bold text-sm text-gray-800">Max Price: <span className="text-price">$ {maxPrice}</span></label>
          <input type="range" min="0" max="1000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}/>
        </div>
      )}

      {/* Categoria */}
      <button
        className={`btn-menu flex justify-between items-center w-full p-4 bg-gray-300 rounded-md mb-3 h-10 ${
          openSection === "category" || clickedButton === "category" ? "active" : ""
        }`}
        onClick={() => toggleSection("category")}
      >
        <div>
          <i
            className={`fa-solid fa-dollar-sign mr-2 ${
              openSection === "category" || clickedButton === "category"
                ? "text-white"
                : "text-gray-500"
            }`}
          ></i>
          <span
            className={`font-bold text-sm ${
              openSection === "category" || clickedButton === "category"? "text-white" : "text-gray-500"}`}>Category</span>
        </div>
        <i
          className={`fa-solid ${
            openSection === "category" ? "fa-caret-down" : "fa-caret-right"} ${openSection === "category" || clickedButton === "category" ? "text-white" : "text-gray-500"
          }`}
        ></i>
      </button>
      {openSection === "category" && (
        <div className="p-3 bg-gray-200 rounded-md mb-2">
          <select value={selectCategory} onChange={(e) => setSelectCategory(e.target.value)} className="w-full mb-2">
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
      )}

      {/* Subcategoria */}
      <button
        className={`btn-menu flex justify-between items-center w-full p-4 bg-gray-300 rounded-md mb-3 h-10 ${
          openSection === "subcategory" || clickedButton === "subcategory" ? "active" : ""
        }`}
        onClick={() => toggleSection("subcategory")}
      >
        <div>
          <i
            className={`fa-solid fa-dollar-sign mr-2 ${
              openSection === "subcategory" || clickedButton === "subcategory"
                ? "text-white"
                : "text-gray-500"
            }`}
          ></i>
          <span
            className={`font-bold text-sm ${
              openSection === "subcategory" || clickedButton === "subcategory"? "text-white" : "text-gray-500"}`}>Subcategory</span>
        </div>
        <i
          className={`fa-solid ${
            openSection === "subcategory" ? "fa-caret-down" : "fa-caret-right"} ${openSection === "subcategory" || clickedButton === "subcategory" ? "text-white" : "text-gray-500"
          }`}
        ></i>
      </button>
      {openSection === "subcategory" && (
        <div className="p-4 bg-gray-200 rounded-md mb-2">
          {/* Subcategory content */}
        </div>
      )}

      {/* Marca */}
      <button
        className={`btn-menu flex justify-between items-center w-full p-4 bg-gray-300 rounded-md mb-3 h-10 ${
          openSection === "brand" || clickedButton === "brand" ? "active" : ""
        }`}
        onClick={() => toggleSection("brand")}
      >
        <div>
          <i
            className={`fa-solid fa-dollar-sign mr-2 ${
              openSection === "brand" || clickedButton === "brand"
                ? "text-white"
                : "text-gray-500"
            }`}
          ></i>
          <span
            className={`font-bold text-sm ${
              openSection === "brand" || clickedButton === "brand"? "text-white" : "text-gray-500"}`}>Brand</span>
        </div>
        <i
          className={`fa-solid ${
            openSection === "brand" ? "fa-caret-down" : "fa-caret-right"} ${openSection === "brand" || clickedButton === "brand" ? "text-white" : "text-gray-500"
          }`}
        ></i>
      </button>
      {openSection === "brand" && (
        <div className="p-4 bg-gray-200 rounded-md mb-2">
          {/* Brand content */}
        </div>
      )}

      {/* Botones de Clear y Buscar */}
      <div className="flex justify-between">
        {/* Eliminar */}
        <button 
          className="btn-menu w-full p-4 bg-gray-300 text-gray-500 rounded-md mr-2 h-10 text-sm font-bold text-center flex items-center justify-center"
          onClick={handleClear}
        >
          Clear
        </button>

        {/* Buscar */}
        <button 
          className="btn-menu w-full p-4 bg-gray-300 text-gray-500 rounded-md h-10 text-sm font-bold text-center flex items-center justify-center"
          onClick={handlerPrice}
        >
          Search
        </button>
      </div>
    </div>
  );
};
