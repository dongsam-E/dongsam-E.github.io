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
                                    <Accordion.Item eventKey={v.key} key={`interview${x}`}>
                                        <Accordion.Header>
                                            <div>
                                                {v.Q.split("<br>").map((br, i) => {
                                                    const strongSplit = br.split("<strong>");
                                                    return (
                                                        <p key={`head${i}`} className={`Q${i}  ${interview.q}`}>
                                                            {strongSplit.map((v, idx) => {
                                                                if (idx % 2 === 0) {
                                                                    return v;
                                                                } else {
                                                                    return <strong key={idx} className={`${interview.strong}`}>{v}</strong>
                                                                }
                                                            })}
                                                        </p>
                                                    )
                                                })}
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {v.A.split("<br>").map((br, i) => {
                                                const strongSplit = br.split("<strong>");
                                                return (
                                                    <p key={`body${i}`} className={`A${i} ${interview.a}`}>
                                                        {strongSplit.map((v, idx) => {
                                                            if (idx % 2 === 0) {
                                                                return v;
                                                            } else {
                                                                return <strong key={idx} className={`${interview.strong}`}>{v}</strong>
                                                            }
                                                        })}
                                                    </p>
                                                )
                                            })}
                                        </Accordion.Body>
                                    </Accordion.Item>
                            )
                        })
                    }
                </Accordion>
            </div>
        </section>
    );
}

export default Interview;