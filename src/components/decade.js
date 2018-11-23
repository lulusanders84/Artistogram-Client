import React, { Component } from 'react';
import './main.css';
import './decade.css';
import './hex-grid.css';
import { res, randomImages } from './dataStore';
import ArtistIcon from './artist-icon'

export const emptyHex = <ArtistIcon imageUrl="" />;
export function addEmptyHex(artistIcons) {
  for(let i=0; i < artistIcons.length; i++) {
    if (i % 8 == 0) {
      artistIcons.splice(i, 0, emptyHex);
    }
  }
}

export default function Decade(props) {
  let artistIcons =
    res.artists[props.title].map(artistIcon =>
      <ArtistIcon imageUrl='https://placeimg.com/200/200/people' artistName={artistIcon} className="hexagon" linkType="artist" />);
  addEmptyHex(artistIcons);
  return (
    <section className={props.class}>
        <h2><div class="decade title-container">{props.title}</div></h2>
        <div className="decade-container">
          <ul id="grid" class="clear">
            {artistIcons}
          </ul>
        </div>
    </section>
  )
}
