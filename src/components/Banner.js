import React from 'react'

const Banner = ({ image, title, subtitle, desc }) => {
  return (
    <div className='w-full h-almost grid grid-flow-row grid-rows-4  bg-gradient-to-r from-mGradientLeft to-mGradientRight'>
      <div className='px-8 pt-4 row-start-1 flex items-center justify-center row-span-1'>
        <img className='w-1/2 ' src={image} alt='illustration' />
      </div>
      <div className='px-8 pb-10 pt-2  row-span-2 mx-auto  text-white'>
        <h2 className='text-4xl mt-2  font-semibold  tracking-normal '>
          {(title = '' ? 'Title' : title)}
        </h2>
        <p className='text-lg font-sans font-semibold tracking-wider'>
          {subtitle}
        </p>
        <p className='text-base font-sans  text-blue-200 mt-6 leading-2 '>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default Banner
