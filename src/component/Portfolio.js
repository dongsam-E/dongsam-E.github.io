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
                        <div key={`port${ii}`} className='container py-5'>
                            <div className={`d-lg-flex py-3`}>
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
                                                <SwiperSlide key={`portslide${i}`} className={`${portfolio.slidelist} d-flex align-items-start`}>
                                                    <img className={`${portfolio.slideimg} w-75`} src={v.imgsrc} alt="portfolioimg" />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                                <div className={`${portfolio.portfolioCard} py-4 py-lg-0`}>
                                    <div>
                                        <div className={`pb-3 ${portfolio.title}`}>{vv.title}</div>
                                        <div className={`${portfolio.subtitle}`}>
                                            <div className={`${portfolio.explainlist} d-flex`}>
                                                <p className={`${portfolio.extitle}`}>제작기간</p>
                                            </div>
                                            <div className={`${portfolio.excontents}`}><p className={`mb-0  ${portfolio.strongtxt}`}>{vv.explain.day}</p></div>
                                        </div>
                                        <div className={`${portfolio.subtitle}`}>
                                            <div className={`${portfolio.explainlist} d-flex`}>
                                                <p className={`${portfolio.extitle}`}>참여도</p>
                                            </div>
                                            <div className={`${portfolio.excontents}`}><p className={`mb-0  ${portfolio.strongtxt}`}>{vv.explain.percent}</p></div>
                                        </div>
                                        <div className={``}>
                                            <div className={`d-flex`}>
                                                <p className={`${portfolio.extitle}`}>주요기능</p>
                                            </div>
                                            <ul className={`m-0 p-0 ${portfolio.main}`}>
                                                <li className={`d-flex mb-2`}>
                                                    <div className={portfolio.plus}></div>
                                                    <p className={`mb-0 ${portfolio.extext}`}>
                                                        {vv.explain.keypointlist0.split("<strong>").map((v, i) => {
                                                            if (i % 2 === 0) {
                                                                return v;
                                                            } else {
                                                                return <strong key={`keypointlist${i}`}>{v}</strong>
                                                            }
                                                        })}
                                                    </p>
                                                </li>
                                                <li className={`d-flex mb-2`}>
                                                    <div className={portfolio.plus}></div>
                                                    <p className={`mb-0 ${portfolio.extext}`}>
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
                                                    <div className={portfolio.plus}></div>
                                                    <p className={`mb-0 ${portfolio.extext}`}>
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
                                    </div>
                                    <hr />
                                    {/* 사용툴 */}
                                    <div className={`${portfolio.subtitle}`}>
                                        <div className={`${portfolio.explainlist} d-flex`}>
                                            <p className={`${portfolio.extitle}`}>사용 툴</p>
                                        </div>
                                        <div className={`${portfolio.excontents}`}>
                                            <div className={`${portfolio.frontendlogo}`}><img src={vv.explain.toolimg0} alt="" /></div>
                                            <div className={`${portfolio.frontendlogo}`}><img src={vv.explain.toolimg1} alt="" /></div>
                                            <div className={`${portfolio.frontendlogo}`}><img src={vv.explain.toolimg2} alt="" /></div>
                                            <div className={`${portfolio.frontendlogo}`}><img src={vv.explain.toolimg3} alt="" /></div>
                                            <div className={`${portfolio.frontendlogo}`}><img src={vv.explain.toolimg4} alt="" /></div>
                                        </div>
                                    </div>
                                    {/* 사용언어 */}
                                    <div className={`${portfolio.subtitle}`}>
                                        <div className={`${portfolio.explainlist} d-flex`}>
                                            <p className={`${portfolio.extitle}`}>사용 언어</p>
                                        </div>
                                        <div className={`${portfolio.excontents}`}>
                                            <div className={`${portfolio.frontendlogo}`}><img src={vv.explain.langimg0} alt="" /></div>
                                            <div className={`${portfolio.frontendlogo}`}><img src={vv.explain.langimg1} alt="" /></div>
                                            <div className={`${portfolio.frontendlogo}`}><img src={vv.explain.langimg2} alt="" /></div>
                                            <div className={`${portfolio.frontendlogo}`}><img src={vv.explain.langimg3} alt="" /></div>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* 소스관리 / url / ui설계 */}
                                    <div className={`d-flex flex-column flex-sm-row justify-content-center justify-content-sm-start text-center ${portfolio.subtitle}`}>
                                        <div className='pb-3 pb-sm-0 pe-0 pe-sm-2'>
                                            <div className={`${portfolio.exbutton}`}><a href={vv.explain.githublink} target="_blank" className={`${portfolio.linkstyle}`}>소스관리</a></div>
                                        </div>
                                        <div className='pb-3 pb-sm-0 px-0 px-sm-2'>
                                            <div className={`${portfolio.exbutton}`}><a href={vv.explain.urllink} target="_blank" className={`${portfolio.linkstyle}`}>페이지 보기</a></div>
                                        </div>
                                        <div className='px-0 px-sm-2'>
                                            <div className={`${portfolio.exbutton}`}><a href={vv.explain.figmalink} target="_blank" className={`${portfolio.linkstyle}`}>UI설계 보러가기</a></div>
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