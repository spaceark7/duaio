import React from 'react'
import data from '../data/DataSummary'
import Banner from './components/Banner'
import ProductBrief from './components/ProductBrief'
import ProductSummary from './components/ProductSummary'

const HomePage = () => {
  return (
    <div className='w-full h-full'>
      <Banner
        image='/images/logo_big.png'
        title='Solusi Terbaik'
        subtitle='Untuk bisnis perusahaan anda.'
        desc='Dengan pesatnya perkembangan zaman dan semakin mutakhirnya teknologi,
          kami hadir untuk memberikan solusi keamanan & kebutuhan perusahaan
          anda.'
      />
      <ProductBrief
        title='SISTEM KEAMANAN GEDUNG'
        desc='Tingkatkan keamanan & keselamatan dengan menggunakan secure system dari kami.'
        image='/images/ss.png'
        isGradient={false}
      />

      {data.map((item) => (
        <ProductSummary
          key={item.id}
          productName={item.product_name}
          image={item.image_path}
          desc={item.description}
        />
      ))}
      <div className='bg-mGradientRight pb-8'>
        <ProductBrief
          isGradient={true}
          title='PEMELIHARAAN GEDUNG'
          image='/images/maintenance.png'
          desc='Berpengalaman lebih dari 10 tahun instalasi listrik untuk gedung - gedung besar, juga pemasangan jalur kabel telepon & jaringan internet.'
        />
        <a href='#'>
          <p className='mx-auto font-semibold bg-transparent w-max py-2 px-4 rounded-md text-white border-2 border-white'>
            Lihat info selengkapnya
          </p>
        </a>
      </div>

      <div className='bg-white'>
        <ProductBrief
          image='/images/bm.png'
          title='ATTENDANCE & COMMUNICATION SYSTEM'
          desc='Permudah proses absensi karyawan secara mutakhir dan percepat komunikasi lokal secara handal.'
          isGradient={false}
        />
        <div className='px-2 py-2 '>
          <div className='container mx-auto w-1/2 h-1/2  py-4 px-4 flex flex-col justify-center items-center '>
            <img
              className='h-1/2 w-1/2 '
              src='/images/fp.png'
              alt='fingerprint icon'
            />
            <h2 className='text-sm mt-3 my-auto font-semibold text-mGradientLeft'>
              Finger Print
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
