import React from 'react'
import './style.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export const Caroussel = () => {
  return (
    <div class="carousel-container">
  <div class="carousel">
    <div class="card">
      <img src="image-1.jpg" alt="Image 1" />
      <div class="card-body">
        <h3>Card 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="card">
      <img src="image-2.jpg" alt="Image 2"/>
      <div class="card-body">
        <h3>Card 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="card">
      <img src="image-3.jpg" alt="Image 3"/>
      <div class="card-body">
        <h3>Card 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <button class="carousel-prev">{'<'}</button>
  <button class="carousel-next">{'>'}</button>
</div>



  )
}