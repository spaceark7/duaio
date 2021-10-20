import React from 'react'

const CardIcon = ({ image, title }) => {
  return (
    <div className='flex flex-col border-2 border-mGradientLeft justify-between items-center border-opacity-60 px-2 py-2 rounded-sm'>
      <img className='w-14' src={image} alt={`${image} icon`} />
      <h2 className='font-semibold text-sm text-mGradientLeft text-opacity-70'>
        {title}
      </h2>
    </div>
  )
}

export default CardIcon
