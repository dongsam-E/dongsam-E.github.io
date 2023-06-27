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
            <section id="slide" className="bg-light">
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
                    <SwiperSlide className='swiper-slide' style={{ backgroundImage: "url(img/slide1.jpg)" }}></SwiperSlide>
                    <SwiperSlide className='swiper-slide' style={{ backgroundImage: "url(img/slide2.jpg)" }}></SwiperSlide>
                    <SwiperSlide className='swiper-slide' style={{ backgroundImage: "url(img/slide3.jpg)" }}></SwiperSlide>
                    <SwiperSlide className='swiper-slide' style={{ backgroundImage: "url(img/slide4.jpg)" }}></SwiperSlide>
                </Swiper>
            </section>
            <section id="about">
                    <div className='about-background' style={{backgroundImage: "url(img/about-background.jpg)"}}>
                        <div className='about-word d-flex align-items-center justify-content-center text-center w-100 h-100'>
                            <p className='mb-0'>about <br />section</p><span>입니다.</span>
                        </div>
                    </div>
            </section>
            <section id="review" className="vh-100 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">2</div>
                        <div className="col-4">3</div>
                    </div>
                </div>
            </section>
            <section id="contact" className="vh-100 bg-success">

            </section>
        </>

    )
}

export default Portfolio