import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import banner from '../scss/banner.module.css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Pagination, Navigation} from "swiper";

function Banner(props) {
    return (
        <section id='banner-section' className={`${banner.bannerH}`}>
            <Swiper 
                modules={[Autoplay, Pagination, Navigation]}
                navigation={true} 
                pagination={{
                    clickable: true,
                }} 
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                className={`mySwiper ${banner.bannerH}`}>
                <SwiperSlide className={`s1 ${banner.slideSt}`}></SwiperSlide>
                <SwiperSlide className={`s2 ${banner.slideSt}`}>Slide 2</SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Banner;