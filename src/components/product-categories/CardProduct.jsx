import React from 'react'
import '../../components/product-categories/cartProduct.css'
import '../../custom/private/definedStyles.css'

export const CardProduct = ({ product }) => {
  return (
    <>
        <div className='carts bg-gray-500 shadow-md p-4 flex flex-col items-center'>
      
            <img src={product.image} alt={product.title} className='h-40 w-full object-hidden mb-4' />
            <h3 className='text-lg font-bold mb-2 text-center'>{product.title}</h3>
            <p className='text-sm mb-2 text-center text-left'>Category: {product.title}</p>
            <p className='text-sm mb-2 text-center'>{product.price}</p>

            <div className='bg-red-500'>
              <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none '>ADD TO CART</button>
            </div>
        </div>
    </>
  )
}
