import React, {useState ,useEffect, useRef} from "react";
import contact from '../scss/contact.module.css';
import emailjs from '@emailjs/browser';


function Contact(props) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_donge', 'template_o9qtppm', form.current, '0QRf5iVdJ60_KDmIi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section id={props.id}>
            <div className={`py-5 container`}>
                <div className={`my-4 ${contact.name}`}>Contact ME!</div>
                <div className={`${contact.sub}`}><p className={`mb-3`}>제안 직무를 선택해주세요</p></div>
                <div>
                    <form ref={form} onSubmit={sendEmail} name="contact" id={`${contact.form}`}>
                        <ul id="subform" className={`${contact.checkbox} p-0 row`}>
                            {
                                props.contactdb.checkbox.map((v, x) =>{
                                    return(
                                        <li key={x} className={`py-1 col-6 col-md-3 d-flex`}>
                                            <label className={`${contact.checkboxlist}`}>
                                                <input
                                                    type="checkbox"
                                                    name={v.name}
                                                    value={v.value}
                                                    className={`d-none`}
                                                />
                                                <div className={`${contact.iconBox}`}>
                                                    <span>{v.title}</span>
                                                </div>
                                            </label>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul id={`${contact.mainform}`} className={`p-0 m-0`}>
                                {
                                    props.contactdb.data.map((v, x) =>{
                                        return(
                                            <li key={x} className={`${contact.formsub}`}>
                                                <input
                                                    className={`${v.inputCls} ${contact.mainCls}`}
                                                    type={v.type}
                                                    placeholder={v.placeholder}
                                                    name={v.name}
                                                />
                                            </li>
                                        )
                                    })
                                }
                        </ul>
                        <div id={`${contact.submit}`}>
                            {
                                props.contactdb.submit.map((v, x) =>{
                                    return(
                                        <div key={x} className = {`${contact.formsub} ${v.liCls}`}>
                                            <input 
                                                className={`${v.inputCls} ${contact.footerCls}`}
                                                type={v.type}
                                                value={v.value}
                                                id={v.id}
                                            />
                                            <label for={v.for} className={v.labelCls}>{v.label}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;