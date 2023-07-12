import React, { useRef, useState } from 'react';
import portfolio from '../scss/portfolio.module.css'
import { Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Keyboard} from "swiper";

function Portfolio(props) {
    return (
        <section id={props.id} className={portfolio.section}>
            <div className={`py-5 ps-5`}>
                <div className={`${portfolio.title} text-white`}>Portfolio</div>
                <Swiper 
                    modules={[Pagination, Keyboard]}
                    slidesPerView={1.5}
                    spaceBetween={10}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    className={`mySwiper py-5`}>
                    {
                        props.portdb.card.map((v, x) => {
                            return(
                            <SwiperSlide>
                                <div key={x} className={`${portfolio.box}`}>
                                    <div id={``}>
                                        <a href="" className={`d-flex justify-content-center`}>
                                            <img className={`${v.imgcls} ${portfolio.cardImg}`} src={v.img} alt="dummyImg" />
                                        </a>
                                    </div>
                                    <div className={`py-3`}>
                                        <div>{v.subtitle}</div>
                                        <div>{v.title}</div>
                                        <div>{v.hash}</div>
                                        <div><a href="">{v.more}</a></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    );
}

export default Portfolio;