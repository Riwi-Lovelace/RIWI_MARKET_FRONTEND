import React, { useEffect, useState } from "react";
// Import Header
import { Header } from "../../components/header/Header";
// Import Api
import { fetchCategories, fetchProducts } from "../../utils/api/fetchCategories";
// Import Component de la card
import { CardProduct } from "../../components/product-categories/CardProduct";
// Import component meny desplegable
import { SidebarMenu } from "../../components/product-categories/SidebarMenu";
// Import Estilos
import '../../custom/private/definedStyles.css'

import '../../pages/productCategories/productCategory.css'

export const ProductCategorie = () => {

  // El estado de los productos
  const [products, setProducts] = useState([]);
  // Para filtrar los productos por precio
  const [filterProductPrice, setFilterProductPrice] = useState([]);
  // Precio minimo de los productos
  const [minPrice, setMinPrice] = useState(0);
  // Precio maximo de los productos
  const [maxPrice, setMaxPrice] = useState(0);

  // Categoria
  const [categories, setCatergories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {

    // Para los productos
    const getProducts = async () => {

      try {
        const productsFromApi = await fetchProducts();
        // Muestra los productos al iniciar
        setProducts(productsFromApi);
        // Muestra los productos al iniciar
        setFilterProductPrice(productsFromApi);

      } catch (error) {
        setError(error.message);
      }
    };

    // Para categorias
    const getCategory = async () => {

      try {
        const categoryFromApi = await fetchCategories();
        setCatergories(categoryFromApi);
      } catch (error) {
        setError(error.message);
      }
    }

    getProducts();
    getCategory();
  }, []);

  // Funtion para filtrar los productos
  const filterProduct = () => {

    const filter = products.filter(
      product => product.price >= minPrice && 
      product.price <= maxPrice && 
      (selectCategory === "" || product.categories === selectCategory)
    );

    setFilterProductPrice(filter);
  }

  return (
    <>
    <Header />
      <div className="flex bg-gray-100">
        {/*Se le pasa los props para filtrar el precio*/}
        <SidebarMenu minPrice={minPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} filterProduct={filterProduct} categories={categories} selectCategory={selectCategory} setSelectCategory={setSelectCategory} /> 
        <div className="w-full p-3 mt-5">
          <h2 className="title text-3xl font-bold mb-8">
            All products <span className="text-gray-400">({products.length})</span>
          </h2>
          {/*Las carts que se van a renderizar*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mx-2 ">
            {products.map((product, index) => (
              <CardProduct key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
