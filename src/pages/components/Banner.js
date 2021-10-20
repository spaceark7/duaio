import React from 'react'

const Banner = ({ image, title, subtitle, desc }) => {
  return (
    <div className='w-full h-full grid grid-flow-row grid-rows-4  bg-gradient-to-r from-mGradientLeft to-mGradientRight'>
      <div className='px-8 pt-8 row-start-1 flex items-center justify-center row-span-2'>
        <img className='w-full ' src={image} alt='illustration' />
      </div>
      <div className='px-8 pb-10 pt-2  row-span-2 mx-auto text-center text-white'>
        <h2 className='text-3xl mt-2  font-bold font-display tracking-wider '>
          {(title = '' ? 'Title' : title)}
        </h2>
        <p className='text-md font-sans font-semibold tracking-wider'>
          {subtitle}
        </p>
        <p className='text-sm font-sans px-2 text-blue-200 mt-3 leading-4 tracking-wide'>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default Banner
