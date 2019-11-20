import React from 'react';

import './CloseButton.css';

export default function CloseButton() {
  return (
    <button className="content__close">
      <div className="close-container">
        <div className="leftright"></div>
        <div className="rightleft"></div>
        <label className="close"></label>
      </div>
    </button>
  )
}