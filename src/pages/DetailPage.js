import React, { useEffect } from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.min.css'
import { BiArrowBack } from 'react-icons/bi'

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
            Kendali Penuh Keamanan Secara Praktis & Efisien.
          </h1>
          <div className='w-full h-almost'></div>
        </div>
      </div>

      {/* Body Section */}

      <ProductBrief
        imageTop={true}
        title='Lebih Hemat & Terjangkau'
        desc='Kami memberikan harga yang kompetitif dan membuka peluang bernegosiasi untuk menjalin kerjasama'
        image='/images/money.jpg'
      />
      <ProductBrief
        imageTop={true}
        title='Selalu Siap Untuk Maintenance'
        desc='Teknisi kami selalu siap untuk melakukan maintenance/pemeliharaan sistem CCTV anda, Serta pemeriksaan seluruh sistem yang berpotensi menjadi permasalahan dikemudian hari.'
        image='/images/Maintenance_tech.jpg'
      />

      <ProductBrief
        imageTop={true}
        title='Akses Dimanapun Anda Berada'
        desc='Sistem kami mendukung monitoring CCTV anda melalui ponsel pintar dan perangkat mobile lainnya. '
        image='/images/smartphone_cctv.jpg'
      />

      <div className='w-full h-almost px-8'>
        <Swiper
          autoHeight
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            '--swiper-navigation-size': '24px',
          }}
          slidesPerView={'auto'}
          centeredSlides
          spaceBetween={10}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          <SwiperSlide>
            <div className='h-80 w-1/2 bg-business bg-cover px-12'>
              <h1
                className={`font-sans pt-10 text-white
         font-light  text-3xl   mx-auto pb-4 pr-10 `}
              >
                Kami Menawarkan Harga Yang Terjangkau Untuk Anda.
              </h1>
              <p className='text-white pt-6 text-opacity-80 '>
                Biaya yang kami tawarkan relatif murah dan kompetitif.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-80 w-1/3 bg-engineer  bg-cover px-12'>
              <h1
                className={`font-sans pt-10 text-white
         font-light  text-3xl   mx-auto pb-4 pr-10 `}
              >
                Kualitas Terbaik Dalam Pengerjaan Menjadi Prioritas Utama Kami.
              </h1>
              <p className='text-white pt-6 text-opacity-80 '>
                Serta pemeliharaan yang mudah dilakukan.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default DetailPage
