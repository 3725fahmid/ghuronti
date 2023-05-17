'use client';


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card1 from '../card1'
import Card2 from '../card2'
import style from './swiper.module.css'
import { SwiperNavButton } from './SwiperNavButton'

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

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
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className={style.buttonOfSlide}><SwiperNavButton/></div>
        <SwiperSlide className={style.card}><Card1/></SwiperSlide>
        <SwiperSlide className={style.card}><Card2/></SwiperSlide>
        <SwiperSlide className={style.card}><Card1/></SwiperSlide>
        <SwiperSlide className={style.card}> <Card2/></SwiperSlide>
        
      </Swiper>
    </>
  );
}



// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { SwiperNavButton } from "./SwiperNavButton";
// import Card1 from '../card1'
// import Card2 from '../card2'
// import style from './swiper.module.css'


// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import {A11y, Pagination, Navigation } from "swiper";

// export default function App() {
//   const [swiperRef, setSwiperRef] = useState(null);

//   let appendNumber = 4;
//   let prependNumber = 2;

//   const prepend2 = () => {
//     swiperRef.prependSlide([
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
//     ]);
//   };

//   const prepend = () => {
//     swiperRef.prependSlide(
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
//     );
//   };

//   const append = () => {
//     swiperRef.appendSlide(
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
//     );
//   };

//   const append2 = () => {
//     swiperRef.appendSlide([
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//       '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
//     ]);
//   };

//   return (
//     <>
//       <Swiper
//         onSwiper={setSwiperRef}
//         slidesPerView={4}
//         centeredSlides={true}
//         spaceBetween={5}
//         className={style.swiper}
//       >
//         <SwiperSlide><Card1/></SwiperSlide>
//         <SwiperNavButton/>
//       </Swiper>
//     </>
//   );
// }