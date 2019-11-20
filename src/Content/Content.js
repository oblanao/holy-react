import React from 'react';

import Menu from '../Menu';
import Scene from '../Scene';
import ContentReveal from '../ContentReveal';
import CloseButton from '../CloseButton';

import './Content.css';

export default function Content() {
  return (
    <div className="content">
      <Menu />
      <Scene />
      <ContentReveal />
      <CloseButton />
    </div >
  )
}