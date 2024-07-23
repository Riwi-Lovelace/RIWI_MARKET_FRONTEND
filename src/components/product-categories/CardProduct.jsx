import React from "react";
import "../../components/product-categories/cartProduct.css";
import "../../custom/private/definedStyles.css";

// CardProduct component displays a product card with image, title, category, and price
const CardProduct = ({ product }) => {
  // Destructure the product object for easier access
  const { image, title, category, price } = product;

  return (
    <div className="carts flex p-4 flex-col items-center">
      {/* Display product image */}
      <img
        src={image}
        alt={title}
        className="mb-4 object-scale-down mt-2"
      />

      {/* Display product title */}
      <h3 className="text-lg sm:text- md:text-sm lg:text-base font-bold mb-1">
        {title}
      </h3>

      {/* Display product category */}
      <p className="text-lg sm:text-sm md:text-sm mt-2 mb-2">
        <span className="font-bold text-lg sm:text-sm md:text-sm">
          Category:
        </span>{" "}
        {category}
      </p>

      {/* Display product price */}
      <p className="price font-bold text-lg sm:text-sm md:text-sm">
        <span className="font-bold">$</span>
        {price}
      </p>

      {/* Button to add the product to the cart */}
      <div className="continer-but">
        <button className="btn-cart btn-text mb-4 h-8 font-bold md:text-sm lg:text-base">
          <i className="fa-solid fa-cart-shopping text-white mr-4"></i>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default CardProduct;