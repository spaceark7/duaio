import React from 'react'

const ProductSummary = ({ productName, image, desc }) => {
  return (
    <div className='relative w-full py-2 h-full  bg-mGradientLeft  '>
      <div className=''>
        <div className='grid px-4 grid-flow-row grid-rows-2 py-4 '>
          <div className='px-4 flex items-center justify-center space-x-2'>
            <h2 className='text-xl font-semibold text-white text-left '>
              {productName}
            </h2>
            <img
              className=' w-1/2 h-full object-contain object-right'
              src={image}
              alt='cctv product'
            />
          </div>
          <div className='px-2'>
            <p className='text-sm mt-1 pt-2 leading-4 text-blue-200'>{desc}</p>
            <div className='py-2  px-3 mt-6 w-max font-semibold rounded-md text-white bg-transparent border-2 border-blue-200'>
              <a href='#'>Lihat selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSummary
