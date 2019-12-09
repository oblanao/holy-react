import React from 'react';

import './Discography.css';

export default function Discography() {
  return (
    <div className="content__inner">
      <h2 className="content__title">discography</h2>
      <h3 className="content__subtitle hide-mobile">
        Listen to my latest hits
          </h3>
      <div className="content__rest">
        <ul className="songs-list">
          <li className="sketchy">
            <iframe title="Everybody's Scared" src="https://open.spotify.com/embed/track/58WVilSugrjanFOTpVtq8d" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </li>
          {/* <li className="sketchy">
            <iframe title="secondSong" src="https://open.spotify.com/embed/track/6p6qMdoReQ6tfBgidP4S4x" width="300" height="78" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </li>
          <li className="sketchy">
            <iframe title="thirdSong" src="https://open.spotify.com/embed/track/6p6qMdoReQ6tfBgidP4S4x" width="300" height="78" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </li> */}
        </ul>
      </div>
    </div>
  )
}