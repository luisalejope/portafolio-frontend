import React from 'react'
import './styles/Caroussel.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export const Caroussel = () => {
    return (
    <Swiper
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    )
}