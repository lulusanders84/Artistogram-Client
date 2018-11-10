import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';

export default function ArtistIcon(props) {
  const hexStyle = {
    backgroundImage: 'url(' + props.imageUrl + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <li>
      <div className= "hexagon" style={hexStyle}>
      </div>
    </li>
  );
}
