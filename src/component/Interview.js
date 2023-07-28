import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import interview from '../scss/interview.module.css';

function Interview(props) {
    return (
        <section id={props.id} className={`${interview.sectionBg}`}>
            <div className={`py-5 container`}>
                <h2 className={`my-4 ${interview.name}`}>Interview</h2>
                <Accordion defaultActiveKey="0">
                    {
                        props.info.interviewdb.accordion.map((v, x) => {
                            return(
                                <>
                                    <Accordion.Item eventKey={v.key} key={x}>
                                        <Accordion.Header>
                                            <div>
                                                {v.Q.split("<br>").map((v, i) => {
                                                    return (
                                                        <p className={`A${i} ${interview.p}`}>{v}</p>
                                                    )
                                                })}
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {v.A.split("<br>").map((v, i)=>{
                                                return(
                                                    <p className={`A${i} ${interview.p}`}>{v}</p>
                                                )
                                            })}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </>
                            )
                        })
                    }
                </Accordion>
            </div>
        </section>
    );
}

export default Interview;