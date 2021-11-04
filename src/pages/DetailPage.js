import React, { useEffect } from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.min.css'
import { BiArrowBack } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'

import data_detail from '../data/DataDetail'
import pagination from 'swiper/components/pagination'
import { useHistory } from 'react-router'
import ProductBrief from '../components/ProductBrief'

SwiperCore.use([pagination])

const DetailPage = ({ match, history, location }) => {
  const detail = data_detail.find(
    (detail) => detail.detail_name === match.params.category
  ) //   let param = match.params.category
  console.log('search: ' + location.search)

  const back = useHistory()
  const goBack = () => {
    back.goBack()
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-screen h-full'>
      <div
        style={{ backgroundImage: `url(/images/${detail.banner_path})` }}
        className={`relative w-full h-screen  bg-no-repeat bg-top-right`}
      >
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
            {detail.detail_subtitle}
          </h1>
          <div className='w-full h-almost'></div>
        </div>
      </div>

      {/* Body Section */}

      {detail.detail_brief.map((brief) => (
        <ProductBrief
          key={brief.id}
          imageTop={brief.isImagetop}
          title={brief.title}
          desc={brief.description}
          image={brief.image}
        />
      ))}

      <div className='w-screen bg-white h-full py-8 '>
        <h1
          className={`font-sans pt-10 text-mGradientLeft
         font-bold  text-2xl text-center  mx-auto pb-8`}
        >
          Kategori
        </h1>

        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            '--swiper-navigation-size': '24px',
          }}
          spaceBetween={20}
          speed={500}
          centeredSlides={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          {detail.category.map((category) => (
            <SwiperSlide key={category.id}>
              <div className='h-96 w-10/12 mx-auto rounded-md bg-mGradientLeft px-4'>
                <h3 className='text-base text-white pt-4'>{category.header}</h3>
                <h1
                  className={`font-sans pt-2 text-white
         font-bold  text-3xl  mx-auto pb-4`}
                >
                  {category.title}
                </h1>
                <p className='text-white pb-8'>{category.description}</p>
                <div className='border-2 border-white rounded-md p-2 w-max group hover:bg-white'>
                  <h3 className='text-white group-hover:text-mGradientLeft '>
                    Hubungi Kami
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='w-full h-full pb-16 bg-white '>
        <h1
          className={`font-sans pt-10 text-mGradientLeft
         font-bold  text-2xl text-center  mx-auto pb-8`}
        >
          Produk Yang Kami Gunakan
        </h1>
        <div className='grid grid-flow-col grid-rows-2 gap-4 px-8 items-center justify-end'>
          {detail.product_image.map((product) => (
            <img
              key={product.id}
              className='w-3/4'
              src={product.path}
              alt={product.path}
            />
          ))}
        </div>
      </div>

      <div className='h-almost  bg-white py-4 px-8'>
        <div className='w-full flex flex-col items-center justify-start '>
          <img
            className='object-scale-down  object-cover w-3/6'
            src='/images/contact_bg.webp'
            alt=''
          />
        </div>
        <h1
          className={`font-sans pt-2 text-mGradientLeft
         font-light  text-4xl  mx-auto pb-2 pr-4  `}
        >
          Ada Pertanyaan?
        </h1>
        <p className='text-gray-700'>
          Kami siap untuk membantu anda untuk berkonsultasi ataupun meminta
          rekomendasi pemasangan ditempat anda.{' '}
        </p>
        <div className='w-full flex items-center flex-row pt-6 pb-2'>
          <div className='bg-mGradientLeft rounded-full w-max p-2'>
            <BsFillTelephoneFill className='text-white text-xl' />
          </div>
          <h2 className='font-semibold text-xl text-mGradientLeft ml-2'>
            0812 - 1839 - 6779
          </h2>
        </div>
        <div className='w-full flex items-center flex-row pt-4 '>
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
    </div>
  )
}

export default DetailPage
