import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import portfolio from '../scss/portfolio.module.css'

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Pagination, Keyboard} from "swiper";

function Portfolio(props) {
    return (
        <section id={props.id} className={`${portfolio.section}`}>
            <div className={`py-5`}>
                <h2 className={`my-4 ${portfolio.name}`}>Portfolio</h2>
                <div className={`pb-5`}>
                    <Swiper
                        modules={[EffectCoverflow, Pagination, Keyboard]}
                        slidesPerView={1.3}
                        // centeredSlides={true}
                        rewind={true}
                        pagination={{
                            clickable: true,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        centeredSlides={true}
                        autoHeight={true}
                        effect={'coverflow'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 13,
                            scale: 0.95,
                            depth: 0,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        breakpoints={{
                            768:{
                                slidesPerView: 1.3
                            }
                            ,992:{
                                slidesPerView:1.5
                            }
                            ,1200:{
                                slidesPerView:2.5
                            }
                        }
                        }
                        className={`mySwiper ${portfolio.myswiper}`}>
                        {
                            props.info.portdb.card.map((v, x) => {
                                return (
                                    <SwiperSlide className={`${v.slidecls} ${portfolio.swiperslide}`}>
                                        <div key={x} className={`${portfolio.box}`}>
                                            <div>
                                                <a href="" className={`d-flex justify-content-center`}>
                                                    <img className={`${v.imgcls} ${portfolio.cardImg}`} src={v.img} alt="dummyImg" />
                                                </a>
                                            </div>
                                            <div className={v.cradcls}>
                                                <div className={`${portfolio.subtitle}`}>{v.subtitle}</div>
                                                <div className={`${portfolio.title}`}>{v.title}</div>
                                                <div className={`${portfolio.hash}`}>{v.hash}</div>
                                                <div className={`${portfolio.moreDiv}`}>
                                                    <a href="" className={`${portfolio.moreA}`}>{v.more}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className={`pt-5`}>
                    <Swiper
                        modules={[Pagination, Keyboard]}
                        slidesPerView={1.3}
                        spaceBetween={10}
                        rewind={true}
                        pagination={{
                            clickable: true,
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        centeredSlides={true}
                        autoHeight={true}
                        breakpoints={{
                            768:{
                                slidesPerView: 1.3
                            }
                            ,992:{
                                slidesPerView:1.5
                            }
                            ,1200: {
                                slidesPerView: 2.5
                            }
                        }
                        }
                        className={`mySwiper ${portfolio.myswiper}`}>
                        {
                            props.info.portdb.card2.map((v, x) => {
                                return(
                                <SwiperSlide className={`${v.slidecls} ${portfolio.swiperslide}`}>
                                    <div key={x} className={`${portfolio.box}`}>
                                        <div>
                                            <a href="" className={`d-flex justify-content-center`}>
                                                <img className={`${v.imgcls} ${portfolio.cardImg}`} src={v.img} alt="dummyImg" />
                                            </a>
                                        </div>
                                        <div className={v.cradcls}>
                                            <div className={`${portfolio.subtitle}`}>{v.subtitle}</div>
                                            <div className={`${portfolio.title}`}>{v.title}</div>
                                            <div className={`${portfolio.hash}`}>{v.hash}</div>
                                            <div className={`${portfolio.moreDiv}`}>
                                                <a href="" className={`${portfolio.moreA}`}>{v.more}</a>
                                            </div>
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

export default Portfolio;