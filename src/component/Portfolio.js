import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolio from '../scss/portfolio.module.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper';

function Portfolio(props) {
    return (

        <section id={props.id} className={`${portfolio.sectionBg}`}>
            <h2 className={`my-4 ${portfolio.name}`}>Portfolio</h2>
            {
                props.info.portdb.map((vv, ii) => {
                    return (
                        <div className='container py-3'>
                            <div className={`d-lg-flex`}>
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
                                        vv.card.map((v, i) => {
                                            return (
                                                <SwiperSlide className={`${portfolio.slidelist}`}>
                                                    <img className={`${v.imgcls} ${portfolio.slideimg}`} src={v.imgsrc} alt="portfolioimg" />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                                <div className={`${portfolio.portfolioCard}`}>
                                    <div>
                                        <div className={`${portfolio.explainlist} d-flex`}>
                                            <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle} pb-2`}>{vv.explain.keypointTitle}</p>
                                        </div>
                                        <ul className={`m-0 p-0 ${portfolio.main}`}>
                                            <li className={`d-flex`}>
                                                <i className={`bi bi-caret-right-fill ${portfolio.bi}`}></i>
                                                <p>
                                                    {vv.explain.keypointlist0.split("<strong>").map((v, i) => {
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
                                                    {vv.explain.keypointlist1.split("<strong>").map((v, i) => {
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
                                                    {vv.explain.keypointlist2.split("<strong>").map((v, i) => {
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
                                            <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle}`}>{vv.explain.mainfunctionTitle}</p>
                                        </div>
                                        <div className={`${portfolio.excontents}`}><span>{vv.explain.functionlist}</span></div>
                                    </div>
                                    <div>
                                        <div className={`${portfolio.explainlist} d-flex`}>
                                            <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle}`}>{vv.explain.githubTitle}</p>
                                        </div>
                                        <div className={`${portfolio.excontents}`}><a href={vv.explain.githublink} target="_blank" className={`${portfolio.linkstyle}`}>{vv.explain.githublink}</a></div>
                                    </div>
                                    <div>
                                        <div className={`${portfolio.explainlist} d-flex`}>
                                            <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle}`}>{vv.explain.urlTitle}</p>
                                        </div>
                                        <div className={`${portfolio.excontents}`}><a href={vv.explain.urllink} target="_blank" className={`${portfolio.linkstyle}`}>{vv.explain.urllink}</a></div>
                                    </div>
                                    <div>
                                        <div className={`${portfolio.explainlist} d-flex`}>
                                            <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle}`}>{vv.explain.frontendTitle}</p>
                                        </div>
                                        <div className={`${portfolio.excontents}`}>
                                            <div className={`${portfolio.frontendlogo}`}><img src={vv.explain.frontendlistimg0} alt="logo" /></div>
                                            <div className={`${portfolio.frontendlogo}`}><img src={vv.explain.frontendlistimg1} alt="logo" /></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={`${portfolio.explainlist} d-flex`}>
                                            <div className={`${portfolio.listIcon}`}></div>
                                            <p className={`${portfolio.extitle}`}>{vv.explain.dataformatTitle}</p>
                                        </div>
                                        <div className={`${portfolio.excontents}`}>
                                            <div className={`${portfolio.frontendlogo}`}><img className='w-75' src={vv.explain.dataformatimg0} alt="" /></div>
                                            <div className={`${portfolio.frontendlogo}`}><img className='w-75' src={vv.explain.dataformatimg1} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })
            }

        </section>
    )
}
export default Portfolio