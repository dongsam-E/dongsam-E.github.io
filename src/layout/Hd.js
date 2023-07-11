import React, { useState, useEffect } from 'react';
import hd from '../scss/hd.module.css';

function Hd(props) {
    const [isToggled, setIsToggled] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    return (
        <header id={props.id} className=''>
            <div isToggled={isToggled} className={`fixed-top d-flex justify-content-around align-items-center ${scrollPosition < 10 ? hd.FirstH : hd.AfterH}`}>
                <div className={`${hd.toggle}`}
                     onClick={() => {
                        setIsToggled(!isToggled)
                }}>
                    <i className={`position-relative ${hd.icon} bi ${!isToggled ? "bi-list" : "bi-x text-white"} ${scrollPosition < 10 ? "text-dark" : "text-white"}`}></i> 
                    <ul className={`${hd.hamMenu} ${!isToggled ? "d-none":"d-block"} position-absolute d-flex flex-column align-items-center justify-content-center`}>
                        {
                         props.hddb.navi.map((val, idx) => {
                            return(
                                <li className={`${val.cls} ${hd.hamLi}`} key={`ham`}>
                                    <a href={val.nm[1]} className={`${hd.hamA}`}>{val.nm[0]}</a>
                                </li>
                            )
                         })
                        }
                    </ul>
                </div>
                <h1>
                    <a href="">
                        <img src={`${scrollPosition < 10 ? "./img/SVG/logo.svg" : "./img/SVG/logo2.svg"}`} alt="" />
                    </a>
                </h1>
                <nav id={`${hd.gnb}`}>
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
                                    <li className={`${val.adtitle} ${hd.snsAd}`} key={`sns`}>
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
        </header>
    );
}

export default Hd;