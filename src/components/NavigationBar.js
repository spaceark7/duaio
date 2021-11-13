import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'

const NavigationBar = () => {
  const [active, setActive] = useState(true)
  const [collapse, setCollapse] = useState(false)

  const handleMenu = () => {
    setActive(!active)
  }
  const collapseMenu = () => {
    setCollapse(!collapse)
  }

  return (
    <>
      {active ? (
        <>
          <nav
            className={`fixed top-0 h-16 transition-all duration-700 ease-in-out w-full flex justify-end items-center bg-white z-20 bg-mGradientLeft`}
          >
            <div
              onClick={handleMenu}
              className='h-16 flex items-center p-3 text-3xl text-white'
            >
              <AiOutlineClose />
            </div>
          </nav>
          <div className='bg-white text-mGradientLeft fixed h-screen w-full z-10 transition-all duration-500 ease-out transform  pt-24 pb-10 '>
            <div className='px-8 py-4'>
              <h2 className='text-4xl '>Menu</h2>
            </div>
            <div className='px-8 py-2'>
              <h1 className='text-2xl border-b-2 py-2 border-mGradientLeft opacity-70 border-opacity-20 font-semibold'>
                Home
              </h1>
            </div>
            {collapse ? (
              <div className='px-8 py-2 relative focus:opacity-100 opacity-70 '>
                <div
                  onClick={collapseMenu}
                  className='flex w-full py-2 items-center gap-x-4 border-b-2 border-opacity-20 border-mGradientLeft font-semibold'
                >
                  <h1 className='text-2xl  transition-all duration-700 ease-in-out  '>
                    Layanan
                  </h1>
                  <div className='flex items-center pt-1'>
                    <IoIosArrowDown className='text-xl transform transition-all duration-200 ease-in-out -rotate-180' />
                  </div>
                </div>

                <div className='flex  transform translate-y-0 transition-all duration-700 ease-in-out flex-col h-full font-semibold gap-y-3 pt-1'>
                  <h2>Instalasi CCTV</h2>
                  <h2>Instalasi alarm Keamanan</h2>
                  <h2>Instalasi Telepon PABX</h2>
                  <h2>Instalasi Listrik Rumahan</h2>
                </div>
              </div>
            ) : (
              <div className='px-8 py-2 focus:opacity-100 opacity-70 '>
                <div
                  onClick={collapseMenu}
                  className='flex w-full py-2 items-center gap-x-4 border-b-2 border-opacity-20 border-mGradientLeft font-semibold'
                >
                  <h1 className='text-2xl transition-all duration-700 ease-in-out  '>
                    Layanan
                  </h1>
                  <div className='flex items-center pt-1'>
                    <IoIosArrowDown className='text-xl transform transition-all duration-200 ease-in-out ' />
                  </div>
                </div>

                <div className='flex absolute top-0 transform -translate-y-full opacity-1  transition-all duration-700 ease-in-out flex-col h-full font-semibold gap-y-3 pt-1'>
                  <h2>Instalasi CCTV</h2>
                  <h2>Instalasi alarm Keamanan</h2>
                  <h2>Instalasi Telepon PABX</h2>
                  <h2>Instalasi Listrik Rumahan</h2>
                </div>
              </div>
            )}

            <div className='px-8 py-2 '>
              <h1 className='text-2xl border-b-2 py-2 border-mGradientLeft opacity-70 border-opacity-20 font-semibold'>
                Kontak Kami
              </h1>
            </div>
          </div>
        </>
      ) : (
        <>
          <nav className='fixed top-0 h-16 transition-all duration-700 ease-in-out w-full flex justify-end bg-white z-20 bg-mGradientLeft opacity-100'>
            <div
              onClick={handleMenu}
              className='h-full flex items-center p-3 text-3xl text-white'
            >
              <HiMenuAlt3 />
            </div>
          </nav>
          <div className='bg-white fixed h-screen w-full z-10 transition-all duration-700 ease-out transform -translate-y-full opacity-0'></div>
        </>
      )}
    </>
  )
}

export default NavigationBar
