import React, {useState ,useEffect, useRef, useCallback} from "react";
import contact from '../scss/contact.module.css';
import emailjs from '@emailjs/browser';
import { Value } from "sass";


function Contact(props) {
    
    const [company, setCompany] = useState("");
    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [text, setText] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const [checkboxCheck, setcheckboxCheck] = useState(false);
    const [textCheck, setTextCheck] = useState(false);
    
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

    function sebdEmail(){
        emailjs.sendForm('service_donge', 'template_o9qtppm', form.current, '0QRf5iVdJ60_KDmIi')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (company !== '' && name !== '' && num !== '' && text !== ''){
            sebdEmail()
            alert('메일이 전송되었습니다. 빠른 회신 드리겠습니다!')
            setCompany("")
            setName("")
            setNum("")
            setText("")
        }else{
            alert('모든 필수 입력값을 채워주세요.')
        }
    }



    const form = useRef();


    return (
        <section id={props.id}>
            <div className={`py-5 container`}>
                <div>
                    <h2 className={`${contact.name}`}>Contact Me!</h2>
                    <span className={`${contact.sub}`}>아래의 폼을 사용하여 <br/>편리하게 메일을 보내보세요</span>
                </div>
                <div className={`${contact.iconlist}`}>
                    <div className={`${contact.icon0}`}><i class="bi bi-telephone-fill"></i> 010-2774-6352</div>
                    <div className={`${contact.icon1}`}><i class="bi bi-envelope-at-fill"></i> dong2dong32@gmail.com</div>
                </div>
                {/* <div className={`${contact.sub}`}><p className={`mb-3`}>제안 직무를 선택해주세요</p></div> */}
                <div>
                    <form ref={form} onSubmit={handleSubmit} name="contact" id={`${contact.form}`}>
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
                                    onChange={handleCompanyChange}
                                    value={company}
                                    required
                                />
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
                                    onChange={(e)=>{
                                        setText(e.target.value);
                                        setTextCheck(e.target.value.length>0)
                                    }}
                                    value={text}
                                    required
                                />
                                <span className={`${textCheck ? contact.formNameExplain0 : contact.formNameExplain1}`}>
                                    간단한 제안 내용을 입력해주세요
                                </span>
                            </li>
                        </ul>
                        <div id={`submit`} className={`${contact.formsub} d-flex justify-content-end py-3`}>
                            <input
                                className={`w-100 ${isFormValid ? contact.Active : contact.Disabled}`}
                                type="submit"
                                value="면접 제안하기"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;