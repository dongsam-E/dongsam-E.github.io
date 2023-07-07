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
                <div className={`fixed-top d-flex justify-content-around align-items-center ${scrollPosition < 10 ? hd.FirstH : hd.AfterH}`}>
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
                                        <li className={val.cls} key={`nav`}>
                                            <a href={val.nm[1]} className={`${scrollPosition < 10 ? "text-dark" : "text-white"}`}>{val.nm[0]}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    <div>
                        <ul className={`m-0 p-0 d-flex`}>
                            {
                                props.hddb.sns.map((val, idx) => {
                                    return (
                                        <li className={`${val.adtitle} ${hd.snsAd} pe-3`} key={`sns`}>
                                            <a href={val.adlink} className={`d-flex flex-column justify-content-center align-items-center ${scrollPosition < 10 ? "text-dark" : "text-white"}`}>
                                                <i className={`${val.cls} ${hd.sns}`}></i>
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