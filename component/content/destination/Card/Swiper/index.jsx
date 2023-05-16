'use client';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButton } from "./SwiperNavButton";
import Card1 from '../card1'
import Card2 from '../card2'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {A11y, Pagination, Navigation } from "swiper";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 2;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
      '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    ]);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={5}
        // pagination={{
        //   type: "none",
        // }}
        // navigation={true}
        // modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Card1/></SwiperSlide>
        <SwiperSlide><Card2/></SwiperSlide>
        <SwiperSlide><Card1/></SwiperSlide>
        <SwiperSlide><Card2/></SwiperSlide>
        <SwiperSlide><Card1/></SwiperSlide>
        <SwiperSlide><Card2/></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperNavButton/>
      </Swiper>
    </>
  );
}