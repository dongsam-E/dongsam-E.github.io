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
            <header id="hd" className="fixed-top bg-light">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1><a href="#none"><img src={Logo} alt="logo" /></a></h1>
                    <ul id="gnb" className="d-md-flex m-auto text-center">
                        <li><a href="#about">나의 소개</a></li>
                        <li><a href="#review">나의 리뷰</a></li>
                        <li><a href="#contact">나의 연락처</a></li>
                    </ul>
                    <ul id="sns" className="d-flex">
                        <li className='github-icon'><a href="https://github.com/dongsam-E/react-test.git" target={'blank'}><img src='img/SVG/github.svg' alt="github" /></a></li>
                        <li className='notion-icon ps-3'><a href="https://www.notion.so/dongsam-e/react-02d74f504f784cb1851eaf5ae32a34c0?showMoveTo=true" target={'blank'}><img src='img/SVG/notion.svg' alt="notion" /></a></li>
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
                    <div className='about-background' style={{backgroundImage: "url(img/about-bg.png)"}}>
                        <div className='about-word d-flex align-items-center justify-content-center text-center w-100 h-100'>
                            <p className='mb-0'>about <br />section</p><span>입니다.</span>
                        </div>
                    </div>
            </section>
            <section id="review" className="bg-light">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-4 col-12 d-flex justify-content-center py-3"><img className='w-75 h-100' src="img/insta.png" alt="review"/></div>
                        <div className="col-md-4 col-12 d-flex justify-content-center py-3"><img className='w-75 h-100' src="img/insta.png" alt="review" /></div>
                        <div className="col-md-4 col-12 d-flex justify-content-center py-3"><img className='w-75 h-100' src="img/insta.png" alt="review" /></div>
                    </div>
                </div>
            </section>
            <section id='contact' className='py-5'>
                <h3 className='d-flex justify-content-center'>contact</h3>
                <form action="https://github.com/dongsam-E/react-test" method="POST">
                    <div className='form-box d-flex justify-content-around align-items-center'>
                        <div>
                            <label for="name">성명</label>
                            <input type="text" id="name" required/>
                        </div>
                        <div>
                            <label for="email">이메일</label>
                            <input type="email" id="email" required/>
                        </div>
                        <div className='d-flex align-items-center'>
                            <label for="message">제안 내용 :</label>
                            <textarea name="message" id="message" required></textarea>
                        </div>
                    </div>
                    <div className='submit-box d-flex justify-content-center align-items-center'>
                        <label for="subscribe">개인정보정책</label>
                        <input type="checkbox" id="subscribe" name="subscribe" value="yes"/>
                        
                        <input type="submit" value="제안 보내기" className='ms-5'/>
                    </div>
                </form>
            </section>
        </>

    )
}

export default Portfolio