import React from 'react';

import {
  AboutMe,
  Contact,
  Discography,
  Gallery,
  News,
  Philosophy
} from '../Pages/'
import './ContentReveal.css';

export default function ContentReveal() {
  return (
    <div className="content content--reveal">
      {/* Order is important. Should match menu__items order, selectors based on (n-th child) */}
      <AboutMe />
      <Discography />
      <Philosophy />
      <Gallery />
      <News />
      <Contact />
      <button className="content__close">
        <div className="close-container">
          <div className="leftright"></div>
          <div className="rightleft"></div>
          <label className="close"></label>
        </div>
      </button>
    </div >
  )
}