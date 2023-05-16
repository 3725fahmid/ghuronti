'use client';
import React from "react";
import { useSwiper } from "swiper/react";


export const SwiperNavButton = () => {
    const swiper = useSwiper();

    return (
        <div className="swiper-nav-btns">
            <button onClick={() => swiper.slidePrev}>pre</button>
            <button onClick={() => swiper.slideNext}>next</button>
        </div>
    )
}