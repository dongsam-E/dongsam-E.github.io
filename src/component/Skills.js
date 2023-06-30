import React from 'react';
import skills from '../scss/skills.module.css';

function Skills(props) {
let skillDB = {
        frontEnd : [
            {
                title : "html/css/js"
            }
            ,{
                title : "scss"
            }
            ,{
                title : "react"
            }
            ,{
                title : "jquery"
            }
            ,{
                title : "bootStrap"
            }
        ]
        ,backEnd : [
            {
                title : "node.js"
            }
        ]
        ,versionControl : [
            {
                title : "git"
            }
            ,{
                title : "gitHub"
            }
        ]
        ,communication : [
            {
                title : "figma"
            }
        ]
        ,certificate : [
            {
                title : "웹디자인자격증"
            }
        ]
    }
    return (
        <section id={props.id} className={`py-5 bg-success`}>
            <div className={`d-sm-flex justify-content-center`}>
                <div className={`d-flex justify-content-center`}>
                    <div className={`skillbg0 bg-light rounded-4`}>
                        <ul className={`feBg m-0`}>
                            {
                                skillDB.frontEnd.map((val, idx) =>{
                                    return(
                                        <li><span className={`visually-hidden`}>{val.title}</span></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={`d-flex flex-column`}>
                    <div className={`d-flex justify-content-center`}>
                        <div className={`skillbg1 bg-light rounded-4`}>
                            <ul className={`beBg m-0`}>
                                {
                                    skillDB.backEnd.map((val, idx) =>{
                                        return(
                                            <li><span className={`visually-hidden`}>{val.title}</span></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-center`}>
                        <div className={`skillbg2 bg-light rounded-4`}>
                            <ul className={`vcBg m-0`}>
                                {
                                    skillDB.versionControl.map((val, idx) =>{
                                        return(
                                            <li><span className={`visually-hidden`}>{val.title}</span></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-center`}>
                        <div className={`skillbg3 bg-light rounded-4`}>
                            <ul className={`commuBg m-0`}>
                                {
                                    skillDB.communication.map((val, idx) => {
                                        return (
                                            <li><span className={`visually-hidden`}>{val.title}</span></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={`d-flex justify-content-center`}>
                        <div className={`skillbg3 bg-light rounded-4`}>
                            <ul className={`certiBg m-0`}>
                                {
                                    skillDB.certificate.map((val, idx) =>{
                                        return(
                                            <li><span className={`visually-hidden`}>{val.title}</span></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;