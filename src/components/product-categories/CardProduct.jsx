import React from "react";
import "../../components/product-categories/cartProduct.css";
import "../../custom/private/definedStyles.css";

export const CardProduct = ({ product }) => {
  return (
    <>
      <div className="carts bg-gray-300 shadow-md  flex flex-col items-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-hidden mb-4 "
        />

        <h3 className="text-lg  mb-2 text-left">{product.title}</h3>
        <p className=" mb-2 text-left">Category: {product.title}</p>
        <p className=" mb-2 text-center">{product.price}</p>
        <div className="continer-but">
          <button className="bg-violet-500 ">ADD TO CART</button>
        </div>
      </div>
    </>
  );
};
