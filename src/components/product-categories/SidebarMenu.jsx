import React, { useState } from "react";
import "./../product-categories/SidebarMenu.css";
import "../../custom/private/definedStyles.css";

export const SidebarMenu = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  filterProduct,
  categories,
  selectCategory,
  setSelectCategory,
}) => {
  // State to manage the open section of the dropdown menu
  const [openSection, setOpenSection] = useState(null);
  // State to activate the button icon (arrow)
  const [activeButton, setActiveButton] = useState(null);
  // State to maintain the style of the clicked button
  const [clickedButton, setClickedButton] = useState(null);

  // Function to toggle the dropdown menu section
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

  // Function to handle the price filter search
  const handlerPrice = () => {
    filterProduct();
  };

  // Function to clear all filters
  const handleClear = () => {
    setMinPrice(0);
    setMaxPrice(0);
    setSelectCategory("");
    filterProduct();
  };

  return (
    <div className="menu-container p-2 mt-20 md:w-60 lg:w-60 ml-2">
      {/* Price section button */}
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
              openSection === "price" || clickedButton === "price"
                ? "text-white"
                : "text-gray-500"
            }`}
          >
            Price
          </span>
        </div>
        <i
          className={`fa-solid ${
            openSection === "price" ? "fa-caret-down" : "fa-caret-right"
          } ${
            openSection === "price" || clickedButton === "price"
              ? "text-white"
              : "text-gray-500"
          }`}
        ></i>
      </button>
      {/* Price range inputs */}
      {openSection === "price" && (
        <div className="flex flex-col p-3 bg-gray-200 rounded-md mb-3">
          {/* Min Price */}
          <label className="mb-2 text-gray-800 font-bold text-sm">
            Min Price: <span className="text-price">$ {minPrice}</span>
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="mb-3"
          />
          {/* Max Price */}
          <label className="mb-2 font-bold text-sm text-gray-800">
            Max Price: <span className="text-price">$ {maxPrice}</span>
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      )}

      {/* Category section button */}
      <button
        className={`btn-menu flex justify-between items-center w-full p-4 bg-gray-300 rounded-md mb-3 h-10 ${
          openSection === "category" || clickedButton === "category"
            ? "active"
            : ""
        }`}
        onClick={() => toggleSection("category")}
      >
        <div>
          <i
            className={`fa-solid fa-tags mr-2 ${
              openSection === "category" || clickedButton === "category"
                ? "text-white"
                : "text-gray-500"
            }`}
          ></i>
          <span
            className={`font-bold text-sm ${
              openSection === "category" || clickedButton === "category"
                ? "text-white"
                : "text-gray-500"
            }`}
          >
            Category
          </span>
        </div>
        <i
          className={`fa-solid ${
            openSection === "category" ? "fa-caret-down" : "fa-caret-right"
          } ${
            openSection === "category" || clickedButton === "category"
              ? "text-white"
              : "text-gray-500"
          }`}
        ></i>
      </button>
      {/* Category dropdown */}
      {openSection === "category" && (
        <div className="p-3 bg-gray-200 rounded-md mb-2">
          <select
            value={selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
            className="w-full mb-2 bg-gray-200 font-bold text-gray-600"
          >
            <option value="">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Subcategory section button */}
      <button
        className={`btn-menu flex justify-between items-center w-full p-4 bg-gray-300 rounded-md mb-3 h-10 ${
          openSection === "subcategory" || clickedButton === "subcategory"
            ? "active"
            : ""
        }`}
        onClick={() => toggleSection("subcategory")}
      >
        <div>
          <i
            className={`fa-solid fa-tags mr-2 ${
              openSection === "subcategory" || clickedButton === "subcategory"
                ? "text-white"
                : "text-gray-500"
            }`}
          ></i>
          <span
            className={`font-bold text-sm ${
              openSection === "subcategory" || clickedButton === "subcategory"
                ? "text-white"
                : "text-gray-500"
            }`}
          >
            Subcategory
          </span>
        </div>
        <i
          className={`fa-solid ${
            openSection === "subcategory" ? "fa-caret-down" : "fa-caret-right"
          } ${
            openSection === "subcategory" || clickedButton === "subcategory"
              ? "text-white"
              : "text-gray-500"
          }`}
        ></i>
      </button>
      {/* Subcategory content */}
      {openSection === "subcategory" && (
        <div className="p-4 bg-gray-200 rounded-md mb-2">
          {/* Subcategory content */}
        </div>
      )}

      {/* Brand section button */}
      <button
        className={`btn-menu flex justify-between items-center w-full p-4 bg-gray-300 rounded-md mb-3 h-10 ${
          openSection === "brand" || clickedButton === "brand" ? "active" : ""
        }`}
        onClick={() => toggleSection("brand")}
      >
        <div>
          <i
            className={`fa-solid fa-tags mr-2 ${
              openSection === "brand" || clickedButton === "brand"
                ? "text-white"
                : "text-gray-500"
            }`}
          ></i>
          <span
            className={`font-bold text-sm ${
              openSection === "brand" || clickedButton === "brand"
                ? "text-white"
                : "text-gray-500"
            }`}
          >
            Brand
          </span>
        </div>
        <i
          className={`fa-solid ${
            openSection === "brand" ? "fa-caret-down" : "fa-caret-right"
          } ${
            openSection === "brand" || clickedButton === "brand"
              ? "text-white"
              : "text-gray-500"
          }`}
        ></i>
      </button>
      {/* Brand content */}
      {openSection === "brand" && (
        <div className="p-4 bg-gray-200 rounded-md mb-2">
          {/* Brand content */}
        </div>
      )}

      {/* Clear and Search buttons */}
      <div className="flex justify-between">
        {/* Clear filters button */}
        <button
          className="btn-menu w-full p-4 bg-gray-300 text-gray-500 rounded-md mr-2 h-10 text-sm font-bold text-center flex items-center justify-center"
          onClick={handleClear}
        >
          Clear
        </button>

        {/* Search button */}
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
