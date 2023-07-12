import React, { useRef, useState } from 'react';
import portfolio from '../scss/portfolio.module.css'
import { Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Keyboard} from "swiper";

function Portfolio(props) {
    return (
        <section id={props.id} className={portfolio.section}>
            <div className={`py-5`}>
                <div className={`my-4 ${portfolio.name}`}>Portfolio</div>
                <div className={`pb-5`}>
                    <Swiper
                        modules={[Pagination, Keyboard]}
                        slidesPerView={1.3}
                        spaceBetween={10}
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
                        breakpoints={{
                            768:{
                                slidesPerView: 1.3
                            },
                            992:{
                                slidesPerView:1.8
                            }
                        }
                        }
                        className={`mySwiper`}>
                        {
                            props.portdb.card.map((v, x) => {
                                return(
                                <SwiperSlide className={`${v.slidecls}`}>
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
                        breakpoints={{
                            768:{
                                slidesPerView: 1.3
                            },
                            992:{
                                slidesPerView:1.8
                            }
                        }
                        }
                        className={`mySwiper`}>
                        {
                            props.portdb.card2.map((v, x) => {
                                return(
                                <SwiperSlide className={`${v.slidecls}`}>
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