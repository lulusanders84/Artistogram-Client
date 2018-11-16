import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import './dashboard.css';
import { userData } from './dataStore';
import ArtistIcon from './artist-icon';

export default function ListItem(props) {

  return (
    <ul id="grid" class="clear">
      <ArtistIcon imageUrl={props.imgSrc} />
      <h4>
        {props.artistName}
      </h4>
    </ul>
  )
}
