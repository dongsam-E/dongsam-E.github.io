import React from 'react';
import about from '../scss/about.module.css';

function About(props) {
    return (
        <section id={props.id} className={`container py-5 d-flex`}>
            <div className={`mx-auto`}>
                <ul className={`row p-0 m-0`}>
                    {
                        props.aboutdb.icon.map((v) => {
                            return (
                                <li className={`col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-end`}>
                                <i className={`${v.i} ${about.iconSize}`}><span>{v.title}</span></i>
                                <p className={`${about.fontSize}`}>{v.content}</p>
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