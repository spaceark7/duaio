import React from 'react'

const Banner = ({ image, title, subtitle, desc }) => {
  return (
    <div className='w-full grid grid-flow-row-dense grid-rows-3  bg-gradient-to-r from-mGradientLeft to-mGradientRight'>
      <div className='px-8 pt-8'>
        <img className='w-full' src={image} alt='illustration' />
      </div>
      <div className='px-8 pt-10  row-span-2 mx-auto text-center text-white'>
        <h2 className='text-4xl mt-2  font-bold font-display tracking-wider '>
          {(title = '' ? 'Title' : title)}
        </h2>
        <p className='text-md font-sans font-semibold tracking-wider'>
          {subtitle}
        </p>
        <p className='text-sm font-sans text-blue-200 mt-3 leading-4'>{desc}</p>
      </div>
    </div>
  )
}

export default Banner
