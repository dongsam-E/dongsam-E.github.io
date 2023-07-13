import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import interview from '../scss/interview.module.css';

function Interview(props) {
    return (
        <section id={props.id} className={`${interview.sectionBg}`}>
            <div className={`py-5 container`}>
                <div className={`my-4 ${interview.name}`}>Interview</div>
                <Accordion defaultActiveKey="0">
                    {
                        props.interviewdb.accordion.map((v, x) => {
                            return(
                                <>
                                    <Accordion.Item eventKey={v.key} key={x}>
                                        <Accordion.Header>{v.title}</Accordion.Header>
                                        <Accordion.Body>
                                            {v.con}
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