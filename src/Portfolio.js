import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './scss/sjh.scss';

import Logo from './img/SVG/logo.svg';

const Portfolio = () => {

    return (
        <>
            <header id="hd" className="fixed-top">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1><a href="#none"><img src={Logo} alt="logo" /></a></h1>
                    <ul id="gnb" className="d-md-flex m-auto text-center">
                        <li><a href="#about">나의 소개</a></li>
                        <li><a href="#review">나의 작업</a></li>
                        <li><a href="#contact">나의 연락처</a></li>
                    </ul>
                    <ul id="sns" className="d-flex">
                        <li className='github-icon'><a href=""><img src='img/SVG/github.svg' alt="github" /></a></li>
                        <li className='notion-icon ps-3'><a href=""><img src='img/SVG/notion.svg' alt="notion" /></a></li>
                    </ul>
                </div>
            </header>
            <div id="slide" className="bg-light">
                <Swiper className='swiper'
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation, Pagination]}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className='bg-danger'></SwiperSlide>
                    <SwiperSlide className='bg-secondary'></SwiperSlide>
                    <SwiperSlide className='bg-success'></SwiperSlide>
                    <SwiperSlide className='bg-primary'></SwiperSlide>
                </Swiper>
            </div>
            <div id="about" className="vh-100 bg-light">

            </div>
            <div id="review" className="vh-100 bg-danger">
                <div className="container">
                    <div className="row">
                        <div className="col-4">1</div>
                        <div className="col-4">2</div>
                        <div className="col-4">3</div>
                    </div>
                </div>
            </div>
            <div id="contact" className="vh-100 bg-light">

            </div>
        </>

    )
}

export default Portfolio