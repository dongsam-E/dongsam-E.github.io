import React from 'react';
import skills from '../scss/skills.module.css';

function Skills(props) {

    return (
        <section id={props.id} className={`py-5 bg-success`}>
            <div className={`container`}>
                <div className={`${skills.con}`}>
                    {
                        props.skilldb.skills.map((v) => {
                            return(
                                <div className={`bg-white ${v.boxCls} ${skills.box}`}>
                                    <h2 className={`${skills.title}`}>{v.title}</h2>
                                    <img src={v.img} alt="" className={`w-75 ${skills.imgcls}`} />
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