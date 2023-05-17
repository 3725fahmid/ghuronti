'use client';
import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './swiper.module.css'

function App() {
  return (
    <div className="App">
      <h1>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={30}
          slidesPerView="auto"
        >
          <SwiperSlide className={style.card}></SwiperSlide>
          <SwiperSlide className={style.card}></SwiperSlide>
          <SwiperSlide className={style.card}></SwiperSlide>
          <SwiperSlide className={style.card}></SwiperSlide>
          <SwiperSlide className={style.card}></SwiperSlide>
          <SwiperSlide className={style.card}></SwiperSlide>
          <SwiperSlide className={style.card}></SwiperSlide>
          <SwiperSlide className={style.card}></SwiperSlide>
          <SwiperNavButtons />
        </Swiper>
      </h1>
    </div>
  );
}

export default App;
