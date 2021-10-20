import React from 'react'
import data from '../data/DataSummary'
import Banner from './components/Banner'
import CardACSItem from './components/CardACSItem'
import CardIcon from './components/CardIcon'
import ProductBrief from './components/ProductBrief'
import ProductSummary from './components/ProductSummary'

const HomePage = () => {
  return (
    <div className='w-full h-full'>
      <Banner
        image='/images/logo_big.png'
        title='Solusi Terbaik'
        subtitle='Untuk bisnis & anda.'
        desc='Dengan pesatnya perkembangan zaman dan semakin mutakhirnya teknologi,
          kami hadir untuk memberikan solusi keamanan & kebutuhan perusahaan
          anda.'
      />

      <div className={` bg-white pb-10 py-6 `}>
        <h1
          className={`font-sans text-mGradientLeft  px-4
            font-bold text-2xl tracking-wide mx-auto text-center `}
        >
          Keunggulan Kami
        </h1>

        <div className='flex bg-white flex-row px-2 justify-center gap-5 pt-4 '>
          <CardIcon image='images/q.png' title=' Berkualitas' />
          <CardIcon image='images/d.png' title='Daya Tahan' />
          <CardIcon image='images/n_1.png' title='Harga Nego' />
        </div>

        <p
          className={`text-center text-gray-500 leading-4 text-sm w-11/12 mx-auto px-2 pt-4`}
        >
          Dengan pengalaman lebih dari 7 Tahun dibidang instalasi perlengkapan
          gedung, kami memprioritaskan kualitas dan daya guna tahan lama bagi
          setiap klien kami.
        </p>
      </div>

      <div className='w-full bg-white'>
        <div className='h-1 w-1/4 mx-auto bg-gray-200 px-10 rounded-full'></div>
      </div>

      <ProductBrief
        title='SISTEM KEAMANAN GEDUNG'
        desc='Tingkatkan keamanan & keselamatan dengan menggunakan secure system dari kami.'
        image='/images/ss.png'
        isGradient={false}
      />
      <div className='flex flex-col'>
        {data.map((item) => (
          <ProductSummary
            key={item.id}
            productName={item.product_name}
            image={item.image_path}
            desc={item.description}
          />
        ))}
      </div>
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

      <div className='bg-white pb-6'>
        <ProductBrief
          image='/images/bm.png'
          title='ATTENDANCE & COMMUNICATION SYSTEM'
          desc='Permudah proses absensi karyawan secara mutakhir dan percepat komunikasi lokal secara handal.'
          isGradient={false}
        />
        <div className='px-4 py-1  '>
          <div className='px-4 pt-2 text-left '>
            <h2 className='font-semibold text-sm text-mGradientLeft border-b-2 border-mGradientLeft w-max border-opacity-25 '>
              Perangkat Absensi
            </h2>
          </div>
          <CardACSItem
            image='/images/fp.png'
            productName='Finger Print'
            desc='Perangkat absensi yang menggunakan sidik jari sebagai pengenal.'
          />

          <CardACSItem
            image='/images/fr.png'
            productName='Face Recognition'
            desc='Sistem pengenal wajah untuk absensi sangat praktis dan akurat.'
          />
          <CardACSItem
            image='/images/rfid.png'
            productName='RFID Reader'
            desc='Perangkat absensi yang menggunakan kartu sebagai tanda pengenal.'
          />

          <div className='px-4 pt-8 text-left'>
            <h2 className='font-semibold text-sm text-mGradientLeft border-b-2 border-mGradientLeft w-max border-opacity-25'>
              Perangkat Komunikasi
            </h2>
          </div>

          <CardACSItem
            image='/images/phone.png'
            productName='Telepon Kantor'
            desc='Jaringan telepon gedung dengan menggunakan perangkat PABX dan sistem wiring yang handal.'
          />

          <div className='px-4 pt-10 pb-2'>
            <a href='#'>
              <p className='mx-auto font-semibold bg-transparent w-max py-2 px-4 rounded-md text-mGradientLeft border-2 border-mGradientLeft'>
                Lihat selengkapnya
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='h-1 w-1/4 mx-auto bg-gray-200 px-10 rounded-full'></div>
      </div>

      <div className='pt-6 bg-white'>
        <div className='bg-mGradientLeft'>
          <div className='px-8 py-6'>
            <h2 className='text-center text-xl font-semibold text-white'>
              Tentang Kami
            </h2>
            <p className='text-sm mt-2 text-white text-center text-opacity-75 leading-5'>
              Kami adalah tenaga ahli yang bergerak dibidang maintenance,
              instalasi dan perbaikan listrik serta perlengkapan keamanan
              gedung.
            </p>
          </div>
        </div>
        <div className='bg-tech bg-cover bg-no-repeat h-60  backdrop-filter backdrop-grayscale w-full'></div>
      </div>

      <div className='flex w-full flex-row h-auto bg-white pt-8 '>
        <div className='pl-6 pr-2 w-3/4 flex flex-col justify-center '>
          <h2 className='font-bold text-2xl text-mGradientLeft'>
            Hubungi Kami
          </h2>
          <h2 className=' text-base'>Dapatkan penawaran terbaik</h2>
          <p className='text-sm mt-2'>
            Kami terbuka untuk konsultasi dan negosiasi
          </p>
        </div>
        <div className='w-1/2 h-60'>
          <img
            className='w-full h-full object-cover  object-left-top '
            src='/images/contact.webp'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
