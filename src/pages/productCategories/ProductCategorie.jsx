import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { fetchProducts } from "../../utils/api/fetchProducts";

import { CardProduct } from "../../components/product-categories/CardProduct";
import { SidebarMenu } from "../../components/product-categories/SidebarMenu";

export const ProductCategorie = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {

    const getProducts = async () => {

      try {
        const productsFromApi = await fetchProducts();
        setProducts(productsFromApi);

      } catch (error) {
        setError(error.message);
      }
    };

    getProducts();
  }, []);

  return (
    <>
    <Header />
      <div className="flex">
        <SidebarMenu />
        <div className="w-full lg:w-3/4 p-4">
          <h2 className="text-3xl font-bold mb-4">
            Category <span className="text-gray-400">({products.length})</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <CardProduct key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
