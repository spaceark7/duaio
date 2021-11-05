import React from 'react'
import Banner from '../components/Banner'
import ProductBrief from '../components/ProductBrief'
import { Link } from 'react-router-dom'
import { BsArrowUpRightSquareFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'

import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import pagination from 'swiper/components/pagination'
import navigation from 'swiper/components/navigation'

SwiperCore.use([pagination, navigation])

const HomePage = () => {
  return (
    <div className='w-full h-full'>
      <Banner
        image='/images/logo_big.png'
        title='All In One Solution untuk Bisnis dan Perusahaan Anda.'
        subtitle=''
        desc='Solusi terbaik untuk Segala Kebutuhan Operasional Anda.'
      />

      <div className={` bg-white h-screen py-12 px-4 `}>
        <div className='pb-6 px-4 pt-4 h-4/6 w-full'>
          <img
            className='w-screen h-full rounded-lg object-left object-cover transition transform    hover:-translate-y-4 duration-500 ease-out'
            src='/images/alarm_building.webp'
            alt=''
          />
        </div>

        <div className='h-2/6 py-2'>
          <h1
            className={`font-sans text-mGradientLeft 
            font-semibold text-2xl px-4 mx-auto `}
          >
            Mutakhirkan Operasional Perusahaan Anda.
          </h1>

          <p className={` text-gray-800 leading-2 text-base  px-4  pt-4`}>
            Dengan perkembangan era teknologi yang cepat, dibutuhkan sistem yang
            handal dan perlengkapan mumpuni untuk memenuhi kebutuhan dan
            mendukung operasional perusahaan.
          </p>
        </div>
      </div>

      <div className='w-screen h-full pb-10 bg-white'>
        <Swiper
          autoHeight
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            '--swiper-navigation-size': '24px',
          }}
          navigation
          loop='true'
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          <SwiperSlide>
            <div className='h-80 w-full bg-business bg-cover px-12'>
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
            <div className='h-80 w-full bg-engineer  bg-cover px-12'>
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
          <SwiperSlide>
            <div className='h-80 w-full bg-technician bg-cover px-12'>
              <h1
                className={`font-sans pt-10 text-white
         font-light  text-3xl   mx-auto pb-4 pr-10 `}
              >
                Daya Pakai Tahan Lama Hingga 15 Tahun.
              </h1>
              <p className='text-white pt-6 text-opacity-80 '>
                Perangkat yang kami gunakan selalu mengikuti model terbaru &
                terbaik.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <ProductBrief
        title='Pantau Keadaan Sekitar Dengan Lebih Ringkas'
        desc='Dengan Sistem keamanan CCTV yang kami sediakan, Anda bisa dengan leluasa memantau keadaan sekitar secraa lebih mudah dengan hanya melihat layar.'
        image='/images/cctv_monitor.jpg'
        isGrey={true}
        link='/detail/cctv'
      />
      <ProductBrief
        title='Kendali Penuh Keamanan Akses Sekitar Anda'
        desc='Kami memberikan layanan pemasangan Sistem Alarm Gedung agar anda bisa mengontrol setiap akses sekitar anda.'
        image='images/security.jpg'
        isGrey={false}
        link='/detail/security alarm'
      />

      <ProductBrief
        image='/images/employee_biometric.jpg'
        title='Lebih Akurat & Mudah Digunakan.'
        desc='Kami menyediakan perangkat attendace seperti FIngerprint, Face Detection dan RFID. Kami juga menyediakan pemasangan jalur telepon kantor (PABX).'
        isGrey={true}
        link='/detail/perangkat biometrik'
      />

      <ProductBrief
        isGrey={false}
        title='Perlengkapan Gedung Lainnya'
        image='/images/network_cable.jpg'
        desc='Kami juga memberikan layanan pemasangan jalur kabel jaringan internet, instalasi listrik rumah, pemasangan filter air dan lainnya'
        link='/detail/perlengkapan gedung'
      />

      <div className='w-full flex justify-center h-96 bg-blend-screen bg-tech bg-cover bg-left py-6 px-8 pr-12 '>
        <h1
          className={`font-sans pt-10 text-white
         font-light  text-4xl  mx-auto pb-4`}
        >
          Kami berkomitmen untuk menjadi solusi layanan bagi bisnis anda.
        </h1>
      </div>

      <div className='flex w-full flex-col h-auto bg-white pt-8 '>
        <div className='pl-6 pr-2 w-full flex flex-col justify-start  '>
          <h2 className='font-bold text-2xl text-mGradientLeft'>
            Kami Siap Membantu
          </h2>

          <p className=' mt-2  text-gray-500 mt-2 text-left'>
            Dapatkan penawaran terbaik sekarang! kami terbuka untuk konsultasi
            dan negosiasi.
          </p>
          <Link to='/contact-us'>
            <div className='flex flex-row gap-2 items-center text-mGradientLeft pt-6'>
              <p className='font-medium'>Hubungi Kami</p>
              <AiOutlineArrowRight />
            </div>
          </Link>
        </div>
        <div className='w-full h-72 pt-8'>
          <img
            className='w-1/2 mx-auto h-full object-cover  object-left-top '
            src='/images/contact.webp'
            alt=''
          />
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

export default HomePage
