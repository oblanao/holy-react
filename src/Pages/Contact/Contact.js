import React from 'react';
import ReactSVG from 'react-svg';

export default function Contact() {
  return (
    <div className="content__inner" id="contact-content">
      <h2 className="content__title">Contact</h2>
      <h3 className="content__subtitle">
        Bookings &amp; Info
          </h3>
      <p>bookings@holy-molly.com</p>
      <div className="content__rest">
        <ReactSVG
          evalScripts="always"
          src="images/icons/instagram.svg"
        />
      </div>
    </div >
  )
}