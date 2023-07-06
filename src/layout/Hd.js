import React, { useState, useEffect } from 'react';
import hd from '../scss/hd.module.css';

function Hd(props) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <>
            <section id={props.id} className=''>
                <div className={`${hd.topBannerBg} d-flex align-items-center`}>
                    <a href={props.hddb.topad.adlink} className={`${hd.topadTitle} d-flex align-items-center justify-content-center`}>
                        <p className={`m-0`}>{props.hddb.topad.adtitle}</p>
                    </a>
                </div>
                <div className={`d-flex justify-content-around align-items-center ${scrollPosition < 10 ? hd.FirstH : hd.AfterH}`}>
                    <h1>
                        <a href="">
                            <img src={`${scrollPosition < 10 ? "./img/SVG/logo.svg" : "./img/SVG/logo2.svg"}`} alt="" />
                        </a>
                    </h1>
                    <nav>
                        <ul className={`m-0 p-0 d-flex ${hd.navWidth} justify-content-around`}>
                            {
                                props.hddb.navi.map((val, idx) => {
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
                                props.hddb.navi.map((val, idx) => {
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