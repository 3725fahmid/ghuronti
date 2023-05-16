'use client';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p  
          style={{
            width:"630px",
            textAlign:"center",
            padding:"65px",
            margin:"165px"
          }}
        >Your thoughtfulness and support of Ghuronti is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in Ghuronti will be justified.</p>
        </SwiperSlide>
        <SwiperSlide>
          <p style={{
            width:"630px",
            textAlign:"center",
            padding:"65px",
            margin:"165px"
          }}>Your thoughtfulness and support of Ghuronti is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in Ghuronti will be justified.</p>
        </SwiperSlide>
        <SwiperSlide>
          <p style={{
            width:"630px",
            textAlign:"center",
            padding:"65px",
            margin:"165px"
          }}>Your thoughtfulness and support of Ghuronti is very much appreciated. You are a very dear friend to the Chamber, and I want to assure you that your confidence in Ghuronti will be justified.</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
