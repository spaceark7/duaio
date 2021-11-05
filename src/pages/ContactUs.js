import React, { useEffect } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { MdMail } from 'react-icons/md'
import { useHistory } from 'react-router'

const ContactUs = () => {
  const back = useHistory()
  const goBack = () => {
    back.goBack()
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className={`relative w-full h-screen bg-cs bg-cover `}>
        <div
          onClick={goBack}
          className='absolute top-3 left-2 py-2 px-2 cursor-pointer bg-white rounded-full '
        >
          <BiArrowBack className='text-mGradientLeft   text-xl' />
        </div>

        <div className='py-20 px-8'>
          <h1
            className={`font-sans pt-10 text-white
         font-light  text-6xl  mx-auto pb-4 pr-10 `}
          >
            Kami Siap Membantu Anda
          </h1>
          <div className='pt-7'>
            <div className='bg-mGradientLeft rounded-full w-max py-2 px-4'>
              <p className='text-lg text-white'>WhatsApp Sekarang</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-1/2 px-8 pb-16'>
        <h1
          className={`font-sans pt-10 text-mGradientLeft
         font-bold  text-2xl      mx-auto pb-8`}
        >
          Atau Hubungi Kami Melalui Email
        </h1>
        <div className='w-full flex items-center flex-row  '>
          <div className='bg-mGradientLeft rounded-full w-max p-2'>
            <MdMail className='text-white text-xl' />
          </div>
          <h2 className='font-semibold text-base text-mGradientLeft ml-2'>
            pandupurnama300819@gmail.com
          </h2>
        </div>
      </div>
      <footer className='w-full py-4 px-4  bg-mGradientRight flex flex-col justify-between items-center py-2 gap-2 '>
        <img className='w-1/3 opacity-40' src='/images/logo_big.png' alt='' />
        <h2 className='text-white text-xs opacity-50 text-center w-3/4'>
          Ruko inkopal blok C. Sunter boulevard barat, Kelapa Gading, Jakarta
          Utara
        </h2>
      </footer>
    </>
  )
}

export default ContactUs
