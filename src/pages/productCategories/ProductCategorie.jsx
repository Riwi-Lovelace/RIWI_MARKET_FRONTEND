import React, { useEffect, useState } from "react";

// Import components
import { Header } from "../../components/header/Header";
import CardProduct from "../../components/product-categories/CardProduct";
import { SidebarMenu } from "../../components/product-categories/SidebarMenu";

// Import API functions
import {
  fetchCategories,
  fetchProducts,
} from "../../utils/api/fetchCategories";

// Import styles
import "../../custom/private/definedStyles.css";
import "../../pages/productCategories/productCategory.css";

export const ProductCategorie = () => {
  // States
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [showMenu, setShowMenu] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(10);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsFromApi, categoriesFromApi] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
        ]);
        setProducts(productsFromApi);
        setFilteredProducts(productsFromApi);
        setCategories(categoriesFromApi);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  // Filter products based on price and category
  const filterProducts = () => {
    const filtered = products.filter(
      (product) =>
        product.price >= minPrice &&
        product.price <= maxPrice &&
        (selectedCategory === "" || product.category === selectedCategory)
    );
    setFilteredProducts(filtered);
  };

  // Show more products
  const handleShowMore = () => {
    setVisibleProducts((prev) => prev + 10);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row lg:flex-row bg-gray-200 p-1">
        {/* Sidebar Menu for large screens */}
        <div className="hidden md:block lg:block p-3">
          <SidebarMenu
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            filterProduct={filterProducts}
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Main content */}
        <div className="w-full p-3 mt-5">
          <h2 className="title text-3xl font-bold mb-6">
            All products{" "}
            <span className="text-gray-400">({filteredProducts.length})</span>
          </h2>

          {/* Filter button for mobile screens */}
          <button
            className="btn-filter text-white font-bold p-2 rounded-md ml-2 mb-4 md:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            Filter
            <i className="ml-2 fa-solid fa-sliders"></i>
          </button>

          {/* Sidebar Menu for mobile screens */}
          {showMenu && (
            <div className="block md:hidden">
              <SidebarMenu
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                filterProduct={filterProducts}
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          )}

          {/* Product cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 mx-2">
            {filteredProducts
              .slice(0, visibleProducts)
              .map((product, index) => (
                <CardProduct key={index} product={product} />
              ))}
          </div>

          {/* Show more button */}
          {visibleProducts < filteredProducts.length && (
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
