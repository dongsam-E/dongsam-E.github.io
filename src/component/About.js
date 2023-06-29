import React from 'react';
import about from '../scss/about.module.css';

function About(props) {
    return (
        <section id='about-section' className={`py-5 d-flex`}>
            <div className={`col ${about.bgImg} col`}></div>
            <div className={`col d-flex justify-content-center align-items-center`}>
                <ul>
                    <div className={`d-flex justify-content-center`}>
                        <div className={`d-flex flex-column align-items-center`}>
                            <i class="bi bi-person-fill"></i>
                            <li>이름</li>
                        </div>
                        <div className={`d-flex flex-column align-items-center`}>
                            <i class="bi bi-calendar"></i>
                            <li>생년월일</li>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-center`}>
                        <div className={`d-flex flex-column align-items-center`}>
                            <i class="bi bi-geo-alt-fill"></i>
                            <li>주소지</li>
                        </div>
                        <div className={`d-flex flex-column align-items-center`}>
                            <i class="bi bi-telephone"></i>
                            <li>연락처</li>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-center`}>
                        <div className={`d-flex flex-column align-items-center`}>
                            <i class="bi bi-envelope-at"></i>
                            <li>이메일</li>
                        </div>
                        <div className={`d-flex flex-column align-items-center`}>
                            <i class="bi bi-pencil"></i>
                            <li>학력</li>
                        </div>
                    </div>
                </ul>
            </div>
        </section>
    );
}

export default About;