import React, { useState, useEffect } from 'react';
import hd from '../scss/hd.module.css';

function Hd(props) {
    const [isToggled, setIsToggled] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <header id={props.id} className=''>
            <div isToggled={isToggled} className={`fixed-top d-flex justify-content-around align-items-center ${scrollPosition < 10 ? hd.FirstH : hd.AfterH}`}>
                <div className={`${hd.toggle} ${!isToggled ? `${hd.ulnone}` : `${hd.ulblock}`}`}
                    onClick={() => {
                        setIsToggled(!isToggled)
                    }}>
                    {/* <img className={`position-relative ${hd.hamImg} `} src={`${!isToggled ? "./img/SVG/hamMenuOn.svg" : "./img/SVG/hamMenuClose.svg"}`} alt="hamMenu" /> */}
                    <svg className={`position-relative ${hd.hamImg}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d={`${!isToggled ? "M3 12H21M3 5H12H21M3 19H12H21" : "M5 5L12.0711 12.0711L19.1421 19.1421" + "M19 5L11.9289 12.0711L4.85786 19.1421"}`} stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <ul className={`${hd.hamMenu}  position-absolute d-flex flex-column align-items-center justify-content-center p-0 m-0`}>
                        {
                            props.info.hddb.navi.map((val, x) => {
                                return (
                                    <div key={x} className={`${val.cls} ${hd.hamLi}`}>
                                        <a href={val.nm[1]} className={`${hd.hamA}`}>{val.nm[0]}</a>
                                    </div>
                                )
                            })
                        }
                        <div className='d-flex'>
                            {
                                props.info.hddb.sns.map((val, x) => {
                                    return (
                                        <div key={x} className={`${val.adtitle} ${hd.snsAd} px-2`}>
                                            <a href={val.adlink} target="_blank" className={`d-flex flex-column justify-content-center align-items-center text-white`}>
                                                <img className={`${hd.hamsnsicon}`} src={val.srclight} alt="icon" />
                                                <span className={`${hd.hamsnsicontxt}`}>{val.adtitle}</span>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </ul>
                </div>
                <h1 className={`m-0`} id={hd.logo}>
                    <a href="" className='d-block'>
                        <img src={`${scrollPosition < 10 ? "./img/SVG/logoEn2.svg" : "./img/SVG/logoKr.svg"}`} alt="" />
                    </a>
                </h1>
                <nav id={`${hd.gnb}`}>
                    <ul className={`m-0 p-0 d-flex`}>
                        {
                            props.info.hddb.navi.map((val, x) => {
                                return (
                                    <li key={x} className={val.cls}>
                                        <a href={val.nm[1]} className={`"text-dark" ${scrollPosition < 10 ? hd.FirstS : hd.AfterS }`}>{val.nm[0]}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <div className={`${hd.snsbox}`}>
                    <ul className={`m-0 p-0 d-flex ${hd.snsBetween}`}>
                        {
                            props.info.hddb.sns.map((val, idx) => {
                                return (
                                    <li className={`${val.adtitle} ${hd.snsAd}`} key={`sns1`}>
                                        <a href={val.adlink} target="_blank" className={`d-flex flex-column justify-content-center align-items-center`}>
                                            <img className={`${hd.snsicon}`} src={val.src} alt="icon" />
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Hd;