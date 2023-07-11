import React from 'react';
import portfolio from '../scss/portfolio.module.css';

function Portfolio(props) {
    return (
        <section id={props.id} className={`${portfolio.h}`}>
            <div>
                <div>
                    <a href="">
                        <img src="https://fourlab.co.kr/web/upload/appfiles/0zdpAngaKBFnlCcCqpCU4A/5d382ad289252f2ec0851dd542362c39.jpg" alt="dummyImg" />
                    </a>
                </div>
                <div>
                    <div>포폴종류ex Ongadam Website</div>
                    <div>타이틀</div>
                    <div>#스킬해시태그</div>
                    <div><a href="">자세히보기</a></div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;