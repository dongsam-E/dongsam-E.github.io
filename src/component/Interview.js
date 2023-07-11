import React from 'react';
import interview from '../scss/interview.module.css';

function Interview(props) {
    return (
        <section id={props.id} className={`${interview.h}`}>
        </section>
    );
}

export default Interview;