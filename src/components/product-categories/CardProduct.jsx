import React from 'react'

export const CardProduct = ({ product }) => {
  return (
    <>
        <div className='bg-white shadow-md p-4 rouded-lg flex flex-col items-center'>
            <img src={product.image} alt={product.title} className='h-40 w-full object-cover mb-4' />
            <h3 className='text-lg font-bold mb-2 text-center'>{product.title}</h3>
            <p className='text-sm mb-2 text-center'>Category: {product.category}</p>
            <p className='text-sm mb-2 text-center'>{product.price}</p>
            <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none '>ADD TO CART</button>
        </div>
    </>
  )
}
