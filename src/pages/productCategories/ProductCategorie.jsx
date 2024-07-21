import React, { useEffect, useState } from "react";
// Import Header
import { Header } from "../../components/header/Header";
// Import Api
import {
  fetchCategories,
  fetchProducts,
} from "../../utils/api/fetchCategories";
// Import Component de la card
import { CardProduct } from "../../components/product-categories/CardProduct";
// Import component meny desplegable
import { SidebarMenu } from "../../components/product-categories/SidebarMenu";
// Import Estilos
import "../../custom/private/definedStyles.css";
import "../../pages/productCategories/productCategory.css";

export const ProductCategorie = () => {
  // El estado de los productos
  const [products, setProducts] = useState([]);
  // Para filtrar los productos por precio
  const [filterProductPrice, setFilterProductPrice] = useState([]);
  // Precio minimo de los productos
  const [minPrice, setMinPrice] = useState(0);
  // Precio maximo de los productos
  const [maxPrice, setMaxPrice] = useState(1000);

  // Categoria
  const [categories, setCatergories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");

  // Abrir menu responsive
  const [showMenu, setShowMenu] = useState(false);

  // Paginacion
  const [visibleProducts, setVisibleProducts] = useState(10);

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
        console.error("Error fetching products:", error.message);
      }
    };

    // Para categorias
    const getCategory = async () => {
      try {
        const categoryFromApi = await fetchCategories();
        setCatergories(categoryFromApi);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    getProducts();
    getCategory();
  }, []);

  // Funtion para filtrar los productos
  const filterProduct = () => {
    console.log("Filtering products with:", {
      minPrice,
      maxPrice,
      selectCategory,
    });

    const filter = products.filter(
      (product) =>
        product.price >= minPrice &&
        product.price <= maxPrice &&
        (selectCategory === "" || product.category === selectCategory)
    );

    console.log("Filtered products:", filter);
    setFilterProductPrice(filter);
  };

  // Función para manejar el botón "Ver más"
  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 10);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row lg:flex-row bg-gray-200 p-1">
        <div className="hidden md:block  lg:block p-3">
          {/* Se le pasa los props para filtrar el precio */}
          <SidebarMenu
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
            filterProduct={filterProduct}
            categories={categories}
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
          />
        </div>

        <div className="w-full p-3 mt-5">
          <h2 className="title text-3xl font-bold mb-6">
            All products{" "}
            <span className="text-gray-400">({filterProductPrice.length})</span>
          </h2>

          <button
            className="btn-filter text-white font-bold p-2 rounded-md ml-2 mb-4 md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            Filter
            <i className="ml-2 fa-solid fa-sliders"></i>
          </button>
          {showMenu && (
            <div className="block md:hidden">
              <SidebarMenu
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                setMinPrice={setMinPrice}
                filterProduct={filterProduct}
                categories={categories}
                selectCategory={selectCategory}
                setSelectCategory={setSelectCategory}
              />
            </div>
          )}

          {/* Las cards que se van a renderizar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mx-2">
            {filterProductPrice
              .slice(0, visibleProducts)
              .map((product, index) => (
                <CardProduct key={index} product={product} />
              ))}
          </div>

          {visibleProducts < filterProductPrice.length && (
            <div className="flex justify-center mt-4">
              <button
                className="btn-show font-bold text-white px-4 py-2 rounded-lg"
                onClick={handleShowMore}
              >
                See more
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
