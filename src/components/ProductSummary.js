import React from 'react'
import { Link } from 'react-router-dom'

const ProductSummary = ({ productName, image, desc }) => {
  return (
    <div className='relative w-screen pt-8 pb-12  flex flex-col px-8 bg-mGradientLeft '>
      <div className='bg-mGradientLeft flex flex-col justify-center items-center  gap-8 '>
        <h2 className='text-2xl leading-7 font-semibold text-white text-left '>
          {productName}
        </h2>
        <div className='h-full'>
          <img
            className='w-3/4 mx-auto object-cover object-left'
            src={image}
            alt='cctv product'
          />
        </div>
      </div>
      <div className=''>
        <p className='text-sm mt-1 pt-2 leading-4 text-blue-200'>{desc}</p>
        <div className='py-2 px-3 text-sm mt-6 w-max font-semibold rounded-md text-white bg-transparent border-2 border-blue-200'>
          <Link to={`/detail/${productName}`}>Lihat selengkapnya</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductSummary
