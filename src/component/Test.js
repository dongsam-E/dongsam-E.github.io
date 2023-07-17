import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import test from '../scss/test.module.css'

import "swiper/css";
import 'swiper/css/effect-fade';

import { EffectFade, Keyboard, Controller } from "swiper";

function Test(props) {
    const [controlledSwiper, setControlledSwiper] = useState(null);

    return (
        <section className={`${test.section}`}>
            <div className={`py-5`}>
                <h2 className={`my-4 ${test.name}`}>test</h2>
                <div className={`pb-5 ${test.box}`}>
                    <Swiper
                        modules={[Controller, Keyboard]} 
                        controller={{ control: controlledSwiper }}
                        slidesPerView={1.3}
                        spaceBetween={10}
                        // centeredSlides={true}
                        rewind={true}
                        keyboard={{
                            enabled: true,
                        }}
                        centeredSlides={true}
                        autoHeight={true}
                        breakpoints={{
                            768: {
                                slidesPerView: 1.3
                            }
                            , 992: {
                                slidesPerView: 1.5
                            }
                            , 1200: {
                                slidesPerView: 2.5
                            }
                        }
                        }
                        className={`mySwiper ${test.myswiper}`}>
                        {
                            props.testdb.card.map((v, x) => {
                                return (
                                    <SwiperSlide className={`${v.slidecls} ${test.swiperslide}`}>
                                        <div key={x} className={`${test.box}`}>
                                            <div>
                                                <a href="" className={`d-flex justify-content-center`}>
                                                    <img className={`${v.imgcls} ${test.cardImg}`} src={v.img} alt="dummyImg" />
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <Swiper
                        modules={[EffectFade, Controller]} 
                        onSwiper={setControlledSwiper}
                        effect={'fade'}
                        className={`mySwiper ${test.subswiper}`}
                    >
                        {
                            props.testdb.card.map((v, x) => {
                                return (
                                    <SwiperSlide className={`${v.slidecls} ${test.swiperslide}`}>
                                            <div className={`${v.cradcls} bg-white ${test.subswiperbox}`}>
                                                <div className={`${test.subtitle}`}>{v.subtitle}</div>
                                                <div className={`${test.title}`}>{v.title}</div>
                                                <div className={`${test.hash}`}>{v.hash}</div>
                                                <div className={`${test.moreDiv}`}>
                                                    <a href="" className={`${test.moreA}`}>{v.more}</a>
                                                </div>
                                            </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Test;