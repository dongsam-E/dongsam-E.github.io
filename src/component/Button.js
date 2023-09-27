import React, { useEffect, useState } from 'react'
import button from '../scss/button.module.css'

function Button(props) {
    const [toggleBtn, setToggleBtn] = useState(true);

    const handleScroll = () => {
        const {scrollY} = window;

        scrollY > 10 ? setToggleBtn(true) : setToggleBtn(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const goToTop = () => {
        window.scrollTo({top : 0, behavior : "smooth"});
    };

    return toggleBtn ? (
        <div id={props.id} onClick={goToTop} className={`${button.bg}`}>
            <i className={`bi bi-chevron-up ${button.arrow}`}></i>
            <div className={`${button.main}`}>
                <span>TOP</span>
            </div>
        </div>
    ) : null;
}

export default Button
