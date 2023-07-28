import React, { useEffect, useRef, useState } from 'react';
import insta from '../scss/insta.module.css';



function Insta(props) {
  
  return (
    <section id={props.id}>
          <div className={`${insta.slidebox}`}>
            <div className={`d-flex ${insta.gallery}`}>
                <ul className={`d-flex ${insta.slidelist} ${insta.original}`}>
                  {
                    props.info.instadb.img.map((v, i) => {
                      return(
                          <li>
                              <a href="">
                                <img src={v.src} alt="" className={`${insta.img}`} />
                              </a>
                          </li>
                      )
                    })
                  }
                </ul>
                <ul className={`d-flex ${insta.slidelist} ${insta.clone}`}>
                  {
                    props.info.instadb.img.map((v, i) => {
                      return(
                          <li>
                              <a href="">
                                <img src={v.src} alt="" className={`${insta.img}`} />
                              </a>
                          </li>
                      )
                    })
                  }
                </ul>
            </div>
          </div>
    </section>
  )
}

export default Insta;