import React from 'react'

import data_detail from '../data/DataDetail'

const DetailPage = ({ match }) => {
  const detail = data_detail.find(
    (detail) => detail.detail_name === match.params.category
  ) //   let param = match.params.category
  console.log(match)
  return (
    <div className='w-full'>
      <div className='relative w-full h-64 bg-cctv bg-cover bg-no-repeat bg-right'>
        <div className='absolute right-0 bottom-6 pr-4'>
          <h2 className=' text-base text-white font-semibold text-right '>
            {detail.detail_name}
          </h2>
          <p className='text-right text-sm text-white'>
            lebih aman & lebih terkendali
          </p>
        </div>
      </div>
      <div className='container bg-white px-4'>
        <div className='py-4 pb-8'>
          <h2 className='text-center text-lg font-semibold text-mGradientLeft'>
            Aman & Terkendali
          </h2>
          <img
            className='w-1/6 mx-auto my-2'
            src='/images/safe_cctv.png'
            alt=''
          />
          <p className='text-xs text-gray-500 px-4 text-center'>
            Anda lebih leluasa memiliki kendali dan keamanan. Kami menjamin
            hardware dan instalasi layanan sistem CCTV kami bisa mengakomodir
            kebutuhan anda.
          </p>
        </div>

        <div className='w-full bg-white'>
          <div className='h-1 w-1/4 mx-auto bg-gray-200 px-10 rounded-full'></div>
        </div>

        <div className='py-4 pb-8'>
          <h2 className='text-center text-lg font-semibold text-mGradientLeft'>
            Terintegrasi dengan ponsel pintar
          </h2>
          <img src='/images/cctv_integration.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default DetailPage
