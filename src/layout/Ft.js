import React from 'react';
import ft from '../scss/ft.module.css';

function Ft(props) {
    return (
        <section id={props.id} className={`${ft.sectionBg} d-flex flex-column justify-content-between py-4 px-4`}>
            <div className={`d-sm-flex justify-content-sm-around`}>
                <div className={`d-flex flex-column justify-content-between`}>
                    <div className={`${ft.information} d-sm-block d-flex flex-column align-items-center pb-5 pb-sm-0`}>
                            <p className={`${ft.name}`}>선주현</p>
                            <p className={`${ft.sub}`}>dong2dong32@gmail.com</p>
                            <p className={`${ft.sub}`}>+82-1027746352</p>
                    </div>
                    <div className={`${ft.logo} d-sm-block d-flex flex-column align-items-center pb-5 pb-sm-0`}>
                        <h2 className={`mb-0`}>
                            <a href="" className={`d-block`}>
                                <img className={`d-block`} src="./img/SVG/logoEn2.svg" alt="flogo" />
                            </a>
                        </h2>
                    </div>
                </div>
                <div className={`${ft.snslist}`}>
                    <ul className={`d-flex justify-content-center`}>
                        <li><a href=""><img src="./img/githubIcon.png" alt="" /></a></li>
                        <li><a href=""><img src="./img/notionIcon1.png" alt="" /></a></li>
                        <li><a href=""><img src="./img/instaIcon0.png" alt="" /></a></li>
                        <li><a href=""><img src="./img/kakao2.png" alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Ft;