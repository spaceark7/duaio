import React, { useState } from 'react'

const ProductBrief = ({ title, desc, image, isGradient }) => {
  const [gradient_setGradient] = useState(isGradient)
  return (
    <div
      className={`py-8 px-4 ${
        isGradient
          ? 'bg-gradient-to-b from-mGradientLeft to-mGradientRight'
          : 'bg-white'
      }  pb-8`}
    >
      <h1
        className={`font-sans ${
          isGradient ? 'text-white' : 'text-mGradientLeft'
        }  font-bold text-xl tracking-wide mx-auto text-center `}
      >
        {title}
      </h1>
      <p
        className={`text-center ${
          isGradient ? 'text-blue-200' : 'text-black'
        } leading-5 text-sm w-11/12 mx-auto`}
      >
        {desc}
      </p>
      <img className='mx-auto w-3/4 py-2 pt-6 ' src={image} alt='' />
    </div>
  )
}

export default ProductBrief
