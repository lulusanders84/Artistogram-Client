import React, { Component } from 'react';
import './main.css';
import './decade.css';
import './hex-grid.css';
import { res, randomImages } from './dataStore';
import ArtistIcon from './artist-icon'

const emptyHex = <ArtistIcon imageUrl="" />;
function addEmptyHex(artistIcons) {
  for(let i=0; i < artistIcons.length; i++) {
    if (i % 8 == 0) {
      artistIcons.splice(i, 0, emptyHex);
    }
  }
}

export default function Decade(props) {
  let artistIcons =
    res.artists[props.title].map(artistIcon =>
      <ArtistIcon imageUrl='https://placeimg.com/200/200/people' artistName={artistIcon} />);
  addEmptyHex(artistIcons);
  return (
    <section className={props.class}>
        <h2>{props.title}</h2>
        <div className="decade-container">
          <ul id="grid" class="clear">
            {artistIcons}
          </ul>
        </div>
    </section>
  )
}
