import React from "react";
import skills from '../scss/skills.module.css';

function Skills(props) {

    return (
        <section id={props.id} className={`${skills.sectionBg}`}>
            <h2 className={`my-4 ${skills.name}`}>My Skills</h2>
            <div className={`container`}>
                <div className={`${skills.con}`}>
                    {
                        props.info.skillsdb.skills.map((v,x) => {
                            return(
                                <div key={x} className={`bg-white mx-3 my-2 ${v.boxCls} ${skills.box} ${skills.ani}`}>
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