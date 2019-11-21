import React, { useEffect } from 'react';
import anime from 'animejs-hooks';

import './Loading.css';

export default function Loading(props) {
  useEffect(() => {
    // var circle1 = anime({
    //   targets: ['.circle-1'],
    //   translateY: -24,
    //   translateX: 52,
    //   direction: 'alternate',
    //   loop: true,
    //   elasticity: 400,
    //   easing: 'easeInOutElastic',
    //   duration: 1600,
    //   delay: 800,
    // });

    // var circle2 = anime({
    //   targets: ['.circle-2'],
    //   translateY: 24,
    //   direction: 'alternate',
    //   loop: true,
    //   elasticity: 400,
    //   easing: 'easeInOutElastic',
    //   duration: 1600,
    //   delay: 800,
    // });

    // var circle3 = anime({
    //   targets: ['.circle-3'],
    //   translateY: -24,
    //   direction: 'alternate',
    //   loop: true,
    //   elasticity: 400,
    //   easing: 'easeInOutElastic',
    //   duration: 1600,
    //   delay: 800,
    // });

    // var circle4 = anime({
    //   targets: ['.circle-4'],
    //   translateY: 24,
    //   translateX: -52,
    //   direction: 'alternate',
    //   loop: true,
    //   elasticity: 400,
    //   easing: 'easeInOutElastic',
    //   duration: 1600,
    //   delay: 800,
    // });
  })
  return (
    <div className="loading-overlay" >
      <div className='center'>
        <div className='loader'>
          {/* <div className='circle circle-1'></div>
          <div className='circle circle-2'></div>
          <div className='circle circle-3'></div>
          <div className='circle circle-4'></div> */}
        </div>
      </div>
    </div>
  )
}