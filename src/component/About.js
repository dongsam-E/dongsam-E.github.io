import React from 'react';
import about from '../scss/about.module.css';

function About(props) {
    return (
        <section id={props.id} className={`container pt-3 pb-5`}>
            <div className={`my-4 fw-bolder d-flex justify-content-center ${about.name}`}>About Me</div>
            <div className={`d-flex justify-content-center`}>
                <ul className={`row p-0 m-0`}>
                    {
                        props.aboutdb.icon.map((v) => {
                            return (
                                <li className={`col-12 col-sm-6 col-lg-4 d-flex align-items-top`}>
                                    <div className={`${about.box}`}>
                                        <i className={`${v.i} ${about.iconSize}`}></i>
                                        <div className={`d-flex flex-column ms-4`}>
                                            <span className={`${about.titleSize} mb-1`}>{v.title}</span>
                                            <p className={`${about.contentSize}`}>{v.content}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

export default About;