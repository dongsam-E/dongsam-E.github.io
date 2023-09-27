import React, { useRef, useState } from 'react';
import about from '../scss/about.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper';

function About(props) {
    return (
        <section id={props.id} className={`${about.section}`}>
            <div id={`${about.box}`} className={`sunimg container-xl`}>
                <div className='imgSection col-lg-6'>
                    <Swiper
                        modules={[EffectFade, Autoplay]}
                        slidesPerView={1}
                        loop={true}
                        // autoplay={{
                        //     delay: 4000,
                        //     disableOnInteraction: false,
                        // }}
                        effect={'fade'}
                        fadeEffect={{
                            crossFade: true
                        }}
                        className="mySwiper d-flex align-items-center"
                    >
                        <SwiperSlide >
                            <div className='aboutbg0 ms-lg-auto'></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='aboutbg1 ms-lg-auto'></div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div id={`${about.script}`} className={`d-flex flex-column align-items-center justify-content-center col-lg-6 ${about.doubleQuote}`}>
                    {/* <img className={`${about.icon}`} src="./img/doubleQuote0.png" alt="icon" /> */}
                    <div className='aboutbg1 ms-lg-auto d-lg-none' id="m-me"></div>
                    <div className={`${about.main} text-center py-3`}>
                        <div className={`m-0 ${about.highlight}`}>
                            <p className={`m-0 ${about.text1} position-relative d-flex flex-column flex-lg-row justify-content-center align-items-center`}><span className={`position-relative ${about.mark}`}>효율적인 서치능력,</span> <span className={`position-relative ${about.mark}`}>꾸준한 기록,</span> <span className={`position-relative ${about.mark}`}>신속한 속도</span></p>
                        </div>
                        <p className={`m-0 pt-3 ${about.text0}`}>그리고 <span className={`${about.nonetext}`}>열린마음으로</span> <em className={`${about.em}`}>새로운 아이디어를 환영</em>하는 개발자</p>
                        <p className={`m-0 pt-3 ${about.text2}`}>선주현</p>
                        <p className={`m-0 d-flex justify-content-center pt-3`}>
                            <span className='afterdeco d-flex align-items-center align-items-center'>97.12.15</span>
                            <span>숙명여자대학교(졸)</span>
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default About;



{/* <ul className={`p-0 m-0 d-flex`}>
                        {
                            props.info.aboutdb.icon.map((v, x) => {
                                return (
                                    <li key={x} className={`px-5`}>
                                        <div className={`${about.box}`}>
                                            <i className={`${v.i} ${about.iconSize}`}></i>
                                            <div className={`d-flex flex-column ms-4`}>
                                                <span className={`${about.titleSize} mb-1`}>{v.title}</span>
                                                <p className={`${about.contentSize}`}>{v.content}</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul> */}