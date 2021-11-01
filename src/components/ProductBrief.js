import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpRightSquareFill } from 'react-icons/bs'

const ProductBrief = ({ title, desc, image, isGrey, link, imageTop }) => {
  return (
    <div
      className={`py-8 px-8 h-screen w-full  ${
        isGrey ? 'bg-gray-100' : 'bg-white'
      }  pb-8`}
    >
      {imageTop ? (
        <>
          <div className='rounded-lg py-2 pt-4 h-4/6 '>
            <img
              className='rounded-lg h-full w-full object-cover object-center-bottom cursor-pointer  transition duration-700 transform hover:-translate-y-4  ease-out'
              src={image}
              alt=''
            />
          </div>
          <div className='h-2/6'>
            <h1
              className={`font-sans pt-10 text-mGradientLeft
         font-bold  text-2xl  mx-auto pb-4`}
            >
              {title}
            </h1>
            <p
              className={`text-gray-700  leading-5 text-lg tracking-wide  mx-auto`}
            >
              {desc}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className='h-2/6'>
            <h1
              className={`font-sans pt-10 text-mGradientLeft
         font-bold  text-2xl  mx-auto pb-4`}
            >
              {title}
            </h1>
            <p className={`text-gray-700  leading-5 text-sm  mx-auto`}>
              {desc}
            </p>
          </div>

          {link ? (
            <div className='pt-2 pb-4 '>
              <Link
                className='flex items-center gap-2 text-mGradientLeft transition '
                to={link}
              >
                <h2 className=''>Lihat Selengkapnya</h2>
                <BsArrowUpRightSquareFill className='hover:animate-bounce' />
              </Link>
            </div>
          ) : (
            <> </>
          )}
          <div className='rounded-lg py-2 pt-4 h-3/6 '>
            <img
              className='rounded-lg h-full object-cover object-center-bottom cursor-pointer  transition duration-700 transform hover:-translate-y-4  ease-out'
              src={image}
              alt=''
            />
          </div>
        </>
      )}
    </div>
  )
}

export default ProductBrief
