import React, { useEffect, useRef, useState } from 'react';
import insta from '../scss/insta.module.css';

//json에 데이터넣어서 맵 돌려야함

function Insta(props) {

  return (
    <section id={props.id} className={`${insta.section}`}>
      <div className={`${insta.bgimg}`}>
        <img src="./img/snsimg.png" alt="snsimg" />
      </div>
      <div>
          <div className={`${insta.box}`}>
              <div className={`d-flex ${insta.topimg}`}>
                  <div className={`${insta.text}`}>
                      <a href="https://www.instagram.com/dongsam_e/"  target="_blank"><span>@dongsam-e</span></a>
                      <p>INSTAGRAM</p>
                  </div>
                  <div>
                      <a href="" target="_blank">
                        <img src="./img/insta1.jpg" alt="" />
                      </a>
                  </div>
                  <div>
                      <a href="https://www.instagram.com/p/CvWDIGdBXIB/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==" target="_blank">
                        <img src="./img/insta2.jpg" alt="" />
                      </a>
                  </div>
              </div>
              <div className={`d-flex ${insta.bottomimg}`}>
                  <div>
                      <a href="" target="_blank">
                        <img src="./img/insta3.jpg" alt="" />
                      </a>
                  </div>
                  <div>
                      <a href="" target="_blank">
                        <img src="./img/insta4.jpg" alt="" />
                      </a>
                  </div>
                  <div>
                      <a href="" target="_blank">
                        <img src="./img/insta5.jpg" alt="" />
                      </a>
                  </div>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Insta;