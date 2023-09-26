import React, { useState, useEffect } from "react";
import skills from '../scss/skills.module.css';
import AOS from "aos";
import "aos/dist/aos.css";


function Skills(props) {
    useEffect(() => {
        AOS.init();
    })
    
    return (
        <section id={props.id} className={`${skills.sectionBg} `}>
            <h2 className={`my-4 ${skills.name}`}>My Skills</h2>
            <div className={`anibox container d-flex flex-column align-items-center py-5`} data-aos="">
                <div class="perbox">
                        {
                            props.info.skillsdb.FrontEnd.map((v, i) => {
                                return(
                                    <div className={`imgbox frontimgbox ${v.title}`}>
                                        <div className="widthbox">
                                            <img src={v.img} alt="logo" key={i} />
                                        </div>
                                        <div className={`${v.graph} mx-4`}></div>
                                        <span className="percent">{v.percent}</span>
                                    </div>
                                )
                            })
                        }
                        {
                            props.info.skillsdb.BackEnd.map((v, i) => {
                                return(
                                    <div className={`imgbox backimgbox ${v.title}`}>
                                        <div className="widthbox">
                                            <img src={v.img} alt="logo" key={i} />
                                        </div>
                                        <div className={`${v.graph} mx-4`}></div>
                                        <span className="percent">{v.percent}</span>
                                    </div>
                                )
                            })
                        }
                        {
                            props.info.skillsdb.Etc.map((v, i) => {
                                return (
                                    <div className={`imgbox etcimgbox ${v.title}`}>
                                        <div className="widthbox">
                                            <img src={v.img} alt="logo" key={i} />
                                        </div>
                                        <div className={`${v.graph} mx-4`}></div>
                                        <span className="percent">{v.percent}</span>
                                    </div>
                                )
                            })
                        }
                </div>
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
                    <div class="perbox pt-3 px-3">
                        <h3 className="bottomh3">프로젝트 보고 및 <br /> 협업 가능한 커뮤니케이션 툴</h3>
                        <div className="d-flex align-items-center justify-content-center">
                            {
                                props.info.skillsdb.Commu.map((v, i) => {
                                    return(
                                        <div className={`imgbox commuimgbox px-2 ${v.title}`}>
                                            <div className="widthbox">
                                                <img src={v.img} alt="logo" key={i} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div class="perbox pt-3 px-3">
                        <h3 className="bottomh3">보유 자격증</h3>
                        <div className="d-flex align-items-center justify-content-center">
                            {
                                props.info.skillsdb.Certi.map((v, i) => {
                                    return(
                                        <div className="imgbox certiimgbox px-2">
                                            <div className="widthbox">
                                                <img src={v.img} alt="logo" key={i} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;