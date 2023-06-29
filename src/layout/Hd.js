import React from 'react';
import hd from '../scss/hd.module.css';

function Hd(props) {
    let naviDB = {
        topad: {
            adtitle: "Github 들어가서 작업능력 알아보기"
            ,adsub: "클릭 시 깃 주소로 이동"
            , adlink: "https://github.com/dongsam-E"
        }
        , navi: [
            {
                nm: ["자기소개", "#aboutMe"]
                , cls: "aboutMe"
            }
            , {
                nm: ["Skills", "#skills"]
                , cls: "skills"
            }
            , {
                nm: ["Portfolio", "#portfolio"]
                , cls: "portfolio"
            }
            , {
                nm: ["모의면접", "#interview"]
                , cls: "interview"
            }
        ]
        , sns: [
            {
                adtitle: "Github",
                cls: "bi bi-github"
                , adlink: "https://github.com/dongsam-E/react-test"
            }
            , {
                adtitle: "Notion",
                cls: "bi bi-journal"
                , adlink: "https://www.notion.so/dongsam-e/array-for-for-in-navi-66ed171b2f204f6fa9884aae1e57f9c9?pvs=4"
            }
        ]
    }

    return (
        <>
            <section id='hd-section' className='fixed-top'>
                <div className={`${hd.topBannerBg} d-flex align-items-center`}>
                    <a href={naviDB.topad.adlink} className={`${hd.topadTitle} d-flex align-items-center justify-content-center text-white`}>
                        <p className={`m-0`}>{naviDB.topad.adtitle}</p>
                    </a>
                </div>
                <div className={`d-flex justify-content-around align-items-center`}>
                    <h1>
                        <a href="">
                            <img src="./img/SVG/logo.svg" alt="" />
                        </a>
                    </h1>
                    <nav>
                        <ul className={`m-0 p-0 d-flex ${hd.navWidth} justify-content-around`}>
                            {
                                naviDB.navi.map((val, idx) => {
                                    return (
                                        <li className={val.cls}>
                                            <a href={val.nm[1]}>{val.nm[0]}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div>
                        <ul className={`m-0 p-0 d-flex`}>
                            {
                                naviDB.sns.map((val, idx) => {
                                    return (
                                        <li className={`${val.adtitle} ${hd.snsAd} pe-3`}>
                                            <a href={val.adlink} className={`d-flex flex-column justify-content-center align-items-center`}>
                                                <i className={val.cls}></i>
                                                <span>{val.adtitle}</span>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hd;