import React from "react";
import "../../components/product-categories/cartProduct.css";
import "../../custom/private/definedStyles.css";

export const CardProduct = ({ product }) => {
  return (
    <>
      <div className="carts flex p-4 flex-col items-center ">
        <img
          src={product.image}
          alt={product.title}
          className="mb-4 object-scale-down"
        />

        <h3 className="text-lg font-bold mb-1">{product.title}</h3>
        <p><span className="font-bold">Category:</span> {product.category}</p>
        <p className="price font-bold"><span className="font-bold">$ </span>{product.price}</p>
        <div className="continer-but">
          <button className="btn-cart mb-4 h-8"><i class="fa-solid fa-cart-shopping text-white mr-4 "></i>ADD TO CART</button>
        </div>
      </div>
    </>
  );
};
