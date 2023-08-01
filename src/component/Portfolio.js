import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolio from '../scss/portfolio.module.css'

function Portfolio(props){
    return(
        <section id={props.id} className={`${portfolio.sectionBg}`}>
            <div className={`${portfolio.portfolioCard}`}>
                <p className={`mb-0 lh-sm ${portfolio.main}`}>
                    첫 react 프로젝트로 코드 재사용과 유지보수에 용이하도록 <strong>컴포넌트를 분리하여 제작하였습니다.</strong><br />
                    폼태그를 하드코딩으로 제작하여 기본적인 코딩 실력을 보였고 폼태그에 대해 더욱 깊게 공부하였습니다.<br />
                    더 나아가 데이터 포멧을 <strong>json파일</strong>로 형성하여 가독성을 올리고 데이터수정을 빠르고 손쉽게 가능하도록 제작하였습니다.
                </p>
                <a href="" className={`${portfolio.morelink}`}>GITHUB 자세히보기</a>
                <hr />
                <div>
                    <div className={`${portfolio.explainlist} d-flex`}>
                        <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle}`}>KEY POINT</p>
                    </div>
                    <div className={`${portfolio.excontents}`}><span>메일전송 폼태그, 간단한 자기소개, Github 및 SNS 링크, 프로젝트 콘텐츠</span></div>
                </div>
                <div>
                    <div className={`${portfolio.explainlist} d-flex`}>
                        <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle}`}>URL</p>
                    </div>
                    <div className={`${portfolio.excontents}`}><a href="https://dongsam-e.github.io/">https://dongsam-e.github.io/</a></div>
                </div>
                <div>
                    <div className={`${portfolio.explainlist} d-flex`}>
                        <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle}`}>FRONT-END</p>
                    </div>
                    <div className={`${portfolio.excontents}`}>
                        <img className={`${portfolio.frontendlogo}`} src="/img/react.png" alt="reactlogo" />
                        <img className={`${portfolio.frontendlogo}`} src="/img/sass.png" alt="sasslogo" />
                    </div>
                </div>
                <div>
                    <div className={`${portfolio.explainlist} d-flex`}>
                        <div className={`${portfolio.listIcon}`}></div><p className={`${portfolio.extitle}`}>DATA-FORMAT</p>
                    </div>
                    <div className={`${portfolio.excontents}`}><span>JSON</span></div>
                </div>
            </div>
        </section>
    )
}
export default Portfolio