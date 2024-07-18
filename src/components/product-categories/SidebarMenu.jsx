import React, { useState } from "react";
import "./../product-categories/SidebarMenu.css";
import "../../custom/private/definedStyles.css";

export const SidebarMenu = () => {
  // Abrir el menu desplegable
  const [openSection, setOpenSection] = useState(null);
  // Activar el icono del boton (la fechita)
  const [activeButton, setActiveButton] = useState(null);

  // Funsion para el menu desplegable
  const toggleSection = (section) => {

    // Si el menu esta abierto lo cerramos
    if (openSection === section) {
      setOpenSection(null);
      setActiveButton(null);

      // Si el menu esta cerrado lo abre y activa los botones
    } else {
      setOpenSection(section);
      setActiveButton(section);
    }
  };

  return (

    <div className="menu-cotainer p-4 mt-16 lg:w-80 rounded-lg ml-4">
      
      {/** Precio */}
      <button
        className="btn flex justify-between items-center w-full p-4 bg-gray-300 rounded-md mb-3 h-10 ${openSection === ? 'active' : ''}"
        onClick={() => toggleSection("price")}
      >
        <div>
          <i className="fa-solid fa-dollar-sign mr-2 text-gray-500"></i>
          <span className="font-bold text-gray-500 text-sm">Price</span>
        </div>
        <i
          className={`text-gray-500 fa-solid ${
            openSection === "price" ? "fa-caret-down" : "fa-caret-right"
          }`}
        ></i>
      </button>
      {openSection === "price" && (
        <div className="p-4 bg-gray-200 rounded-md mb-2">
          <input type="range" min="1" max="100" required />
        </div>
      )}

      {/** Categoria */}
      <button
        className="btn flex justify-between items-center w-full p-4 bg-gray-300 rounded-md mb-3 h-10"
        onClick={() => toggleSection("category")}
      >
        <div>
          <i class="fa-solid fa-grip-vertical mr-2 text-gray-500"></i>
          <span className="font-bold text-gray-500 text-sm">Category</span>
        </div>
        <i
          className={`txt text-gray-500 fa-solid ${
            openSection === "category" ? "fa-caret-down" : "fa-caret-right"
          }`}
        ></i>
      </button>
      {openSection === "category" && (
        <div className="p-4 bg-gray-200 rounded-md mb-2">
          <input type="range" min="1" max="100" required />
        </div>
      )}

      {/** Subcategory */}
      <button
        className="btn flex justify-between items-center w-full p-4 bg-gray-300 rounded-md mb-3 h-10"
        onClick={() => toggleSection("subcategory")}
      >
        <div>
          <i class="fa-solid fa-layer-group mr-2 text-gray-500"></i>
          <span className="txt font-bold text-gray-500 text-sm">
            Subcategory
          </span>
        </div>
        <i
          className={`text-gray-500 fa-solid ${
            openSection === "subcategory" ? "fa-caret-down" : "fa-caret-right"
          }`}
        ></i>
      </button>
      {openSection === "subcategory" && (
        <div className="p-4 bg-gray-200 rounded-md mb-2">Hola</div>
      )}

      {/** Brand */}
      <button
        className="btn flex justify-between items-center w-full p-4 bg-gray-300 rounded-md mb-3 h-10"
        onClick={() => toggleSection("brand")}
      >
        <div>
          <i class="fa-regular fa-square-check mr-2 text-gray-500"></i>
          <span className="txt font-bold text-gray-500 text-sm">Brand</span>
        </div>
        <i
          className={`text-gray-500 fa-solid ${
            openSection === "brand" ? "fa-caret-down" : "fa-caret-right"
          }`}
        ></i>
      </button>
      {openSection === "brand" && (
        <div className="p-4 bg-gray-200 rounded-md mb-2">Hola</div>
      )}

      {/* Botones de Clear y Buscar */}
      <div className="flex justify-between ">
        <button className="btn w-full p-4 bg-gray-300 rounded-md mr-2 h-10 text-sm font-bold text-center flex items-center justify-center">Clear</button>
        <button className="btn w-full p-4 bg-gray-300 rounded-md h-10 text-sm font-bold text-center flex items-center justify-center">Search</button>
      </div>
    </div>
  );
};
