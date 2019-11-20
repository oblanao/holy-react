import React, { useEffect } from 'react';
import './ContentReveal.css';

export default function ContentReveal() {
  useEffect(() => {

  })
  return (
    <div className="content content--reveal">
      <div className="content__inner">
        <h2 className="content__title">about me</h2>
        <h3 className="content__subtitle">
          Chameleonic artist that perfectly blends with her vocals in different music
          genres such as pop, trap, R&B, electro, soul, rock, deephouse
          </h3>
      </div>
      <div className="content__inner">
        <h2 className="content__title">discography</h2>
        <h3 className="content__subtitle">
          Coming soon ...
          </h3>
      </div>
      <div className="content__inner">
        <h2 className="content__title">Philosophy</h2>
        <h3 className="content__subtitle">
          Holy Molly Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cupiditate rem ipsam expedita blanditiis ea ex officiis magnam, ducimus doloremque deleniti. Commodi, voluptate ipsam! Blanditiis, modi. Sed quasi officiis nulla.
          </h3>
      </div>
      <div className="content__inner">
        <h2 className="content__title">Comparisons</h2>
        <h3 className="content__subtitle">
          The melancholy building really paused the relation.
          </h3>
      </div>
      <div className="content__inner">
        <h2 className="content__title">News</h2>
        <h3 className="content__subtitle">
          Coming soon...
          </h3>
      </div>
      <div className="content__inner" id="contact-content">
        <h2 className="content__title">Contact</h2>
        <h3 className="content__subtitle">
          Bookings &amp; Info
          </h3>
        <p>bookings@holy-molly.com</p>

      </div >
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