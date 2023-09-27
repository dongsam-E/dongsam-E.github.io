import React, {useState ,useEffect, useRef, useCallback} from "react";
import contact from '../scss/contact.module.css';
import emailjs from '@emailjs/browser';
import { Value } from "sass";


function Contact(props) {
    
    const [company, setCompany] = useState("");
    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [text, setText] = useState("");

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

    const [checkboxStates, setcheckboxStates] = useState({
        FrontEnd : false,
        publisher : false,
        provider : false,
        designer : false,
    })
    const handleCheckboxChange = (e) => {
        const{name, checked} = e.target;
        setcheckboxStates({
            ...checkboxStates,
            [name]: checked,
        })
    }
    const isAnyCheckboxChecked = Object.values(checkboxStates).some((state) => state); // checkbox조건화
    const isTextCheck = Object.values(text).length > 0
    const isNumCheck = Object.values(num).length > 0
    const isNameCheck = Object.values(name).length > 0
    const isCompanyCheck = Object.values(company).length > 0     // 필수요소 표시 ui

    const [isFormValid, setIsFormValid] = useState(false); //폼 유효성 확인 ui
    useEffect(() => {
        const isFormValid = company !== '' && name !== '' && num !== '' && text !== '' && isAnyCheckboxChecked;
        setIsFormValid(isFormValid);
    }, [company, name, num, text, isAnyCheckboxChecked])

    function sendEmail(){
        emailjs.sendForm('service_donge', 'template_o9qtppm', form.current, '0QRf5iVdJ60_KDmIi')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (company !== '' && name !== '' && num !== '' && text !== '' && isAnyCheckboxChecked){
            sendEmail()
            alert('메일이 전송되었습니다. 빠른 회신 드리겠습니다!')
            setCompany("")
            setName("")
            setNum("")
            setText("")
            setcheckboxStates(false)
        }else{
            alert('모든 필수 입력값을 채워주세요.')
        }
    }



    const form = useRef();


    return (
        <section id={props.id} className={`${contact.sectionBg} py-5`}>
            <div className={`py-5 container`}>
                <div>
                    <h2 className={`${contact.name}`}>Contact Me!</h2>
                    <span className={`${contact.sub}`}>아래의 폼을 사용하여 <br/>편리하게 메일을 보내보세요</span>
                </div>
                <div className={`${contact.iconlist}`}>
                    <div className={`${contact.icon0}`}><i className="bi bi-telephone-fill"></i> 010-2774-6352</div>
                    <div className={`${contact.icon1}`}><i className="bi bi-envelope-at-fill"></i> dong2dong32@gmail.com</div>
                </div>
                <div>
                    <form ref={form} onSubmit={handleSubmit} name="contact" id={`${contact.form}`}>
                        <ul id="subform" className={`${contact.checkbox} p-0 row`}>
                            <li className={`py-1 col-6 col-md-3 d-flex`}>
                                <label className={`${contact.checkboxlist}`}>
                                    <input
                                        type="checkbox"
                                        name="FrontEnd"
                                        value="프론트엔드"
                                        className={`d-none`}
                                        checked={checkboxStates.FrontEnd}
                                        onChange={handleCheckboxChange}
                                    />
                                    <div className={`${contact.iconBox}`}>
                                        <span>프론트엔드</span>
                                    </div>
                                </label>
                            </li>
                            <li className={`py-1 col-6 col-md-3 d-flex`}>
                                <label className={`${contact.checkboxlist}`}>
                                    <input
                                        type="checkbox"
                                        name="publisher"
                                        value="퍼블리셔"
                                        className={`d-none`}
                                        checked={checkboxStates.publisher}
                                        onChange={handleCheckboxChange}
                                    />
                                    <div className={`${contact.iconBox}`}>
                                        <span>퍼블리셔</span>
                                    </div>
                                </label>
                            </li>
                            <li className={`py-1 col-6 col-md-3 d-flex`}>
                                <label className={`${contact.checkboxlist}`}>
                                    <input
                                        type="checkbox"
                                        name="provider"
                                        value="기획/마케팅"
                                        className={`d-none`}
                                        checked={checkboxStates.provider}
                                        onChange={handleCheckboxChange}
                                    />
                                    <div className={`${contact.iconBox}`}>
                                        <span>기획/마케팅</span>
                                    </div>
                                </label>
                            </li>
                            <li className={`py-1 col-6 col-md-3 d-flex`}>
                                <label className={`${contact.checkboxlist}`}>
                                    <input
                                        type="checkbox"
                                        name="designer"
                                        value="디자인"
                                        className={`d-none`}
                                        checked={checkboxStates.designer}
                                        onChange={handleCheckboxChange}
                                    />
                                    <div className={`${contact.iconBox}`}>
                                        <span>디자인</span>
                                    </div>
                                </label>
                            </li>
                        </ul>
                        <span className={`${contact.checkboxEx} ${isAnyCheckboxChecked ? contact.formNameExplain0 : contact.formNameExplain1}`}>
                            제안 업무를 1개 이상 선택해주세요<br className={`${contact.checkboxExBr}`} />(다중선택 가능)
                        </span>
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
                                <i className={`bi bi-asterisk ${contact.requiredIcon} ${isCompanyCheck ? contact.formNameExplain0 : contact.formNameExplain1}`}></i>
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
                                <i className={`bi bi-asterisk ${contact.requiredIcon} ${isNameCheck ? contact.formNameExplain0 : contact.formNameExplain1}`}></i>
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
                                <i className={`bi bi-asterisk ${contact.requiredIcon} ${isNumCheck ? contact.formNameExplain0 : contact.formNameExplain1}`}></i>
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
                                <i className={`bi bi-asterisk ${contact.requiredIcon} ${isTextCheck ? contact.formNameExplain0 : contact.formNameExplain1}`}></i>
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