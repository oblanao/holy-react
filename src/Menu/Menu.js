import React from 'react';

import './Menu.css';

export default function Menu() {
  return (
    <nav className="menu">
      <a className="menu__item">About Me</a>
      <a className="menu__item">Discography</a>
      <a className="menu__item">Philosophy</a>
      <a className="menu__item">Gallery</a>
      <a className="menu__item">News</a>
      <a className="menu__item">Contact</a>
    </nav>
  )
}