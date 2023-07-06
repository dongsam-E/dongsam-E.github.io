import React from "react";
import skills from '../scss/skills.module.css';

function Skills(props) {

    return (
        <section id={props.id} className={`pb-5 py-4 bg-primary`}>
            <div className={`my-4 fw-bolder d-flex justify-content-center ${skills.name}`}>My Skills</div>
            <div className={`container`}>
                <div className={`${skills.con}`}>
                    {
                        props.skilldb.skills.map((v) => {
                            return(
                                <div className={`bg-white mx-3 my-2 ${v.boxCls} ${skills.box} ${skills.ani}`}>
                                    <h2 className={`${skills.title}`}>{v.title}</h2>
                                    <img src={v.img} alt="" className={`${v.imgcls}`} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Skills;