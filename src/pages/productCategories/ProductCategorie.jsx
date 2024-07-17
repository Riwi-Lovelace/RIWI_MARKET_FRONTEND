import React, { useEffect, useState } from 'react'
import { Header } from '../../components/header/Header'
import { fetchProducts } from '../../utils/api/api';
import { CardProduct } from '../../components/product-categories/CardProduct';

export const ProductCategorie = () => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const getProducts = async () => {

      try {
        const productsFromApi = await fetchProducts();
        setProducts(productsFromApi);
      } catch (error) {
        setError(error.message)
      }
    };

    getProducts();
  }, []);

  if(error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />  
      <div className='w-3/4 p-4'>
        <h2 className='text-2x1 font-bold mb-4'>Category {products.length}</h2>
        <div className='grid grid-cols-4 gap-4'>
          {products.map((product, index) => (
            <CardProduct key={index} product={product}/>
          ))}
        </div>
      </div>
    </>
  )
}
