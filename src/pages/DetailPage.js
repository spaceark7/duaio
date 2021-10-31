import React, { useEffect } from 'react'
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/components/pagination/pagination.min.css'
import { BiArrowBack } from 'react-icons/bi'

import data_detail from '../data/DataDetail'
import pagination from 'swiper/components/pagination'
import { useHistory } from 'react-router'

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
        className={`relative w-full h-screen  bg-cover bg-no-repeat bg-left`}
      >
        <div
          onClick={goBack}
          className='absolute top-3 left-2 py-2 px-2 cursor-pointer bg-white rounded-full '
        >
          <BiArrowBack className='text-mGradientLeft   text-xl' />
        </div>
      </div>
    </div>
  )
}

export default DetailPage
