import React from 'react';
import about from '../scss/about.module.css';

function About(props) {
    let iconDB = {
        icon : [
            {
                title : "이름"
                ,i : "bi bi-person-fill"
                ,content : "선주현"
            }
            ,{
                title: "연락처"
                , i: "bi bi-telephone-fill"
                , content: "010-2774-6352"
            }
            ,{
                title : "주소지"
                ,i: "bi bi-geo-alt-fill"
                ,content : "경기도 성남시"
            }
            
        ]
        ,icon2 : [
             {
                title: "생년월일"
                , i: "bi bi-calendar-fill"
                , content: "97.12.15"
            }
            , {
                title: "이메일"
                , i: "bi bi-envelope-at-fill"
                , content: "dong2dong32@gmail.com"
            }
            , {
                title: "학력"
                , i: "bi bi-pencil-fill"
                , content: "숙명여자대학교(졸)"
            }
        ]
    }
    return (
        <section id={props.id} className={`container py-5 d-flex`}>
            {/* <div className={`col ${about.bgImg} col`}></div> */}
            <div className={`d-sm-flex justify-content-center align-items-center m-auto`}>
                <ul className={`m-0 p-0`}>
                    <div className={`d-sm-flex`}>
                        <div className={`${about.iconWidth} col`}>
                            {
                                iconDB.icon.map((val, idx)=> {
                                    return(
                                        <li className={`d-flex align-items-top`}>
                                            <i className={`${val.i} pe-4 ${about.iconSize}`}></i>
                                            <div>
                                                <span className={`${about.fontSize} text-nowrap`}>{val.title}</span>
                                                <p className={`mb-3 text-nowrap`}>{val.content}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </div>
                        <div className={`${about.iconWidth} col`}>
                            {
                                iconDB.icon2.map((val, idx)=> {
                                    return(
                                        <li className={`d-flex align-items-top`}>
                                            <i className={`${val.i} pe-4 ${about.iconSize}`}></i>
                                            <div>
                                                <span className={`${about.fontSize} text-nowrap`}>{val.title}</span>
                                                <p className={`mb-3 text-nowrap`}>{val.content}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </div>
                </ul>
            </div>
        </section>
    );
}

export default About;