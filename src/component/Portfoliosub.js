import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolio from '../scss/portfoliosub.module.css'

import "swiper/css";
import 'swiper/css/effect-fade';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Keyboard, Navigation, Controller, EffectFade } from "swiper";


function Portfoliosub(props) {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    return (
        <section id={props.id} className={`${portfolio.section}`}>
            <div className={`py-5`}>
                <h2 className={`my-4 ${portfolio.name}`}>Portfolio</h2>
                <div className={`${portfolio.paddingbottom}`}>
                    <main className=' position-relative'>
                        <Swiper
                            modules={[Keyboard, Controller, Navigation]}
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
                                        <SwiperSlide key={"card0" + x} className={`${v.slidecls} ${portfolio.swiperslide}`}>
                                            <div className={`${portfolio.box}`}>
                                                <div className='d-flex justify-content-center'>
                                                    <img className={`${v.imgcls} ${portfolio.imgtest}`} src={v.img} alt="cardImg" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        <Swiper
                            modules={[Controller, EffectFade]}
                            onSwiper={setControlledSwiper}
                            slidesPerView={1}
                            effect={'fade'}
                            cssMode={true}
                            className={`mySwiper ${portfolio.subswiper}`}>
                            {
                                props.info.portdb.card.map((v, x) => {
                                    return (
                                        <SwiperSlide key={"card1" + x} className={`${v.slidecls} ${portfolio.swiperslide}`}>
                                            <div className={`${v.cradcls} ${portfolio.subcard}`}>
                                                <div className={`${portfolio.subtitle}`}>{v.subtitle}</div>
                                                <div className={`${portfolio.titlebox} d-sm-flex`}>
                                                    <div className={`${portfolio.title}`}>{v.title}&nbsp;</div>
                                                    <div className={`${portfolio.title}`}>{v.title2}</div>
                                                </div>
                                                <div className={`${portfolio.hash}`}>{v.hash}</div>
                                                <div className={portfolio.explain}>
                                                    {v.explain.split("<br>").map((br, i) => {
                                                        const strongSplit = br.split("<strong>");
                                                        return(
                                                            <p key={i} className={`explain${i} ${portfolio.explainText}`}>
                                                                {strongSplit.map((v, idx) => {
                                                                    if (idx % 2 === 0){
                                                                        return v;
                                                                    }else{
                                                                        return <strong key={idx}>{v}</strong>
                                                                    }
                                                                })}
                                                            </p>
                                                        )
                                                    })}
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

export default Portfoliosub;