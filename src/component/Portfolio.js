import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolio from '../scss/portfolio.module.css'

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/scrollbar';

import { EffectCoverflow, Keyboard, Navigation, Controller, EffectFade, Scrollbar } from "swiper";


function Portfolio(props) {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    return (
        <section id={props.id} className={`${portfolio.section}`}>
            <div className={`py-5`}>
                <h2 className={`my-4 ${portfolio.name}`}>Portfolio</h2>
                <div className={`pb-5`}>
                    <main className=' position-relative'>
                        <Swiper
                            modules={[Keyboard, Controller]}
                            controller={{ control: controlledSwiper }}
                            slidesPerView={1}
                            spaceBetween={10}
                            rewind={true}
                            keyboard={{
                                enabled: true,
                            }}
                            centeredSlides={true}
                            autoHeight={true}
                            breakpoints={{
                                992: {
                                    slidesPerView: 1.3
                                },
                                1200: {
                                    slidesPerView: 1.7
                                }
                            }}
                            className={`mySwiper ${portfolio.myswiper}`}>
                            {
                                props.info.portdb.card.map((v, x) => {
                                    return (
                                        <SwiperSlide className={`${v.slidecls} ${portfolio.swiperslide}`}>
                                            <div key={x} className={`${portfolio.box}`}>
                                                <div className='d-flex justify-content-center'>
                                                    <img className={`${v.imgcls} ${portfolio.imgtest}`} src={v.img} alt="dummyImg" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        <Swiper
                            modules={[Controller, EffectFade, Scrollbar]}
                            onSwiper={setControlledSwiper}
                            slidesPerView={1}
                            effect={'fade'}
                            cssMode={true}
                            scrollbar={{
                                hide: false,
                            }}
                            className={`mySwiper ${portfolio.subswiper}`}>
                            {
                                props.info.portdb.card.map((v, x) => {
                                    return (
                                        <SwiperSlide className={`${v.slidecls} ${portfolio.swiperslide} position-relative bg-white`}>
                                            <div key={x} className={``}>
                                                <div className={`${v.cradcls} ${portfolio.subcard}`}>
                                                    <div className={`${portfolio.subtitle}`}>{v.subtitle}</div>
                                                    <div className={`${portfolio.title}`}>{v.title}</div>
                                                    <div className={`${portfolio.hash}`}>{v.hash}</div>
                                                    <div id='more'><a className={`${portfolio.moreA}`} href=""></a></div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </main>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;