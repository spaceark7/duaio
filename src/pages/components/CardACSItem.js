import React from 'react'

const CardACSItem = ({ image, productName, desc }) => {
  return (
    <div className='container shadow-md   mx-auto w-full  py-4 px-4 flex flex-row space-x-3 justify-center items-center '>
      <img className='w-14 ' src={image} alt={` ${productName} icon`} />
      <div>
        <h2 className='text-md my-auto font-semibold text-mGradientLeft'>
          {productName}
        </h2>
        <p className='text-xs text-gray-500'>{desc}</p>
      </div>
    </div>
  )
}

export default CardACSItem
