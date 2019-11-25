import React from 'react';
import '../Pages.css';

export default function AboutMe() {
  return (
    <div className="content__inner">
      <h2 className="content__title">about me</h2>
      <h3 className="content__subtitle">
        Chameleonic artist that perfectly blends with her vocals in different music
        genres such as pop, trap, R&B, electro, soul, rock, deephouse
      </h3>
      <div className="content__rest">
        <p>Haules baules</p>
        <p>lorem ipsum dolor sit amet et conescietur</p>
        <img src="https://via.placeholder.com/350x200.png" alt="asd" />
      </div>      
    </div>
  )
}