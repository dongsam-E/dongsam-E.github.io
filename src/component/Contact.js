import React, {useState ,useEffect, useRef, useCallback} from "react";
import contact from '../scss/contact.module.css';
import emailjs from '@emailjs/browser';
import { Value } from "sass";


function Contact(props) {
    
    const [company, setCompany] = useState("");
    const [companyCheck, setCompanyCheck] = useState(false)
    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [text, setText] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const handleCompanyChange = (e) => {
        setCompany(e.target.value);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleNumChange = (e) => {
        setNum(e.target.value);
    }
    const handleTextChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (company !== '' && name !== '' && num !== '' && text !== ''){
            alert('메일이 전송되었습니다. 빠른 회신 드리겠습니다!')
        }else{
            alert('모든 필수 입력값을 채워주세요.')
        }
    }



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
                <h2 className={`my-4 ${contact.name}`}>Contact ME!</h2>
                <div className={`${contact.sub}`}><p className={`mb-3`}>제안 직무를 선택해주세요</p></div>
                <div>
                    <form ref={form} onSubmit={sendEmail && handleSubmit} name="contact" id={`${contact.form}`}>
                        <ul id="subform" className={`${contact.checkbox} p-0 row`}>
                            {
                                props.info.contactdb.checkbox.map((v, x) =>{
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
                            <li className={`${contact.formsub}`}>
                                <input
                                    className={`w-100 ${contact.mainCls}`}
                                    type="text"
                                    placeholder="회사 명"
                                    name="company"
                                    onChange={(e)=>{
                                            setCompany(e.target.value)
                                            setCompanyCheck(e.target.value.length>1)
                                        }
                                    }
                                    value={company}
                                    required
                                />
                            </li>
                            <li className={`${companyCheck?contact.formNameExplain2 :contact.formNameExplain}`}>
                                <p name="companyExplain">
                                회사명은 앞에 (주)를 붙여주세요.
                                </p>
                            </li>
                            <li className={`${contact.formsub}`}>
                                <input
                                    className={`w-100 ${contact.mainCls}`}
                                    type="text"
                                    placeholder="담당자 명"
                                    name="name"
                                    onChange={handleNameChange}
                                    value={name}
                                    required
                                />
                            </li>
                            <li className={`${contact.formsub}`}>
                                <input
                                    className={`w-100 ${contact.mainCls}`}
                                    type="tel"
                                    placeholder="대표 번호"
                                    name="num"
                                    onChange={handleNumChange}
                                    value={num}
                                    required
                                />
                            </li>
                            <li className={`${contact.formsub}`}>
                                <input
                                    className={`w-100 ${contact.mainCls}`}
                                    type="text"
                                    placeholder="제안 내용"
                                    name="text"
                                    onChange={handleTextChange}
                                    value={text}
                                    required
                                />
                            </li>
                        </ul>
                        <div id={`submit`} className={`${contact.formsub} d-flex justify-content-end py-3`}>
                            <input
                                className={`w-100 ${isFormValid ? contact.Active : contact.Disabled}`}
                                type="submit"
                                value="면접 제안하기"
                                disabled={company.length<1 || name.length<1 || num.length<1 || text.length<1}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;