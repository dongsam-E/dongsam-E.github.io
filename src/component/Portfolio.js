import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolio from '../scss/portfolio.module.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper';

function Portfolio(props){
    return(
        <section id={props.id} className={`${portfolio.sectionBg}`}>
            <h2 className={`my-4 ${portfolio.name}`}>Portfolio</h2>
            <div className={`container d-lg-flex`}>
                <Swiper
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    pagination={{
                        type: 'fraction',
                    }}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}

                    className="mySwiper"
                >
                    {
                        props.info.portdb.card.map((v, i) => {
                            return(
                                <SwiperSlide className={`${portfolio.slidelist}`}>
                                    <img className={`${v.imgcls} ${portfolio.slideimg}`} src={v.imgsrc} alt="portfolioimg" />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className={`${portfolio.portfolioCard}`}>
                    {
                        props.info.portdb.explain.map((v,i) => {
                            return(
                                <>
                                    <div>
                                        <div className={`${portfolio.explainlist} d-flex`}>
                                            <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle} pb-2`}>{v.keypointTitle}</p>
                                        </div>
                                        <ul className={`m-0 p-0 ${portfolio.main}`}>
                                            <li className={`d-flex`}>
                                                <i className={`bi bi-caret-right-fill ${portfolio.bi}`}></i>
                                                <p>
                                                    {v.keypointlist0.split("<strong>").map((v, i) => {
                                                        if (i % 2 === 0){
                                                            return v;
                                                        } else {
                                                            return <strong key={`keypointlist${i}`}>{v}</strong>
                                                        }
                                                    })}
                                                </p>
                                            </li>
                                            <li className={`d-flex`}>
                                                <i className={`bi bi-caret-right-fill ${portfolio.bi}`}></i>
                                                <p>
                                                    {v.keypointlist1.split("<strong>").map((v, i) => {
                                                        if (i % 2 === 0) {
                                                            return v;
                                                        } else {
                                                            return <strong key={`keypointlist${i}`}>{v}</strong>
                                                        }
                                                    })}
                                                </p>
                                            </li>
                                            <li className={`d-flex`}>
                                                <i className={`bi bi-caret-right-fill ${portfolio.bi}`}></i>
                                                <p>
                                                    {v.keypointlist2.split("<strong>").map((v, i) => {
                                                        if (i % 2 === 0) {
                                                            return v;
                                                        } else {
                                                            return <strong key={`keypointlist${i}`}>{v}</strong>
                                                        }
                                                    })}
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className={`${portfolio.explainlist} d-flex`}>
                                            <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle}`}>{v.mainfunctionTitle}</p>
                                        </div>
                                        <div className={`${portfolio.excontents}`}><span>{v.functionlist}</span></div>
                                    </div>
                                    <div>
                                        <div className={`${portfolio.explainlist} d-flex`}>
                                            <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle}`}>{v.githubTitle}</p>
                                        </div>
                                        <div className={`${portfolio.excontents}`}><a href={v.githublink} target="_blank" className={`${portfolio.linkstyle}`}>{v.githublink}</a></div>
                                    </div>
                                    <div>
                                        <div className={`${portfolio.explainlist} d-flex`}>
                                            <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle}`}>{v.urlTitle}</p>
                                        </div>
                                        <div className={`${portfolio.excontents}`}><a href={v.urllink} target="_blank" className={`${portfolio.linkstyle}`}>{v.urllink}</a></div>
                                    </div>
                                    <div>
                                        <div className={`${portfolio.explainlist} d-flex`}>
                                            <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle}`}>{v.frontendTitle}</p>
                                        </div>
                                        <div className={`${portfolio.excontents}`}>
                                            <div className={`${portfolio.frontendlogo}`}><img src={v.frontendlistimg0} alt="reactlogo" /></div>
                                            <div className={`${portfolio.frontendlogo}`}><img src={v.frontendlistimg1} alt="sasslogo" /></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${portfolio.explainlist} d-flex`}>
                                            <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle}`}>{v.dataformatTitle}</p>
                                        </div>
                                        <div className={`${portfolio.excontents}`}><span>{v.dataformat}</span></div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default Portfolio