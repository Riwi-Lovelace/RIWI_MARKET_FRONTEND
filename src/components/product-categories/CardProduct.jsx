import React from "react";
import "../../components/product-categories/cartProduct.css";
import "../../custom/private/definedStyles.css";

export const CardProduct = ({ product }) => {
  return (
    <>
      <div className="carts flex p-4 flex-col items-center">
        <img
          src={product.image}
          alt={product.title}
          className="mb-4 object-scale-down mt-2"
        />

        <h3 className="text-lg sm:text-sm md:text-sm lg:text-base font-bold mb-1">
          {product.title}
        </h3>
        <p className="text-lg sm:text-sm md:text-sm mt-2 mb-2">
          <span className="font-bold text-lg sm:text-sm md:text-sm">
            Category:
          </span>{" "}
          {product.category}
        </p>
        <p className="price font-bold text-lg sm:text-sm md:text-sm ">
          <span className="font-bold ">$ </span>
          {product.price}
        </p>
        <div className="continer-but">
          <button className="btn-cart mb-4 h-8 sm:text-md">
            <i className="fa-solid fa-cart-shopping text-white mr-4 sm:text-sm"></i>
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
};
