import React, { useEffect } from 'react';

import './Gallery.css';

export default function Gallery() {
  const mediaReady = localStorage.getItem('igMedia_ready') === 'true';
  useEffect(() => {
    if (mediaReady) {
      console.log(`We've got the media`)
    } else {
      console.log(`We don't have the media`)
    }
  })
  return (
    <div className="content__inner">
      <h2 className="content__title">Gallery</h2>
      <h3 className="content__subtitle">
        Check out my latest Instagram Posts
      </h3>
      <div className="content__rest gallery-container">

      </div>
    </div>
  )
}