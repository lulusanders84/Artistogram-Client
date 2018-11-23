import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './hex-grid.css';

export default function ArtistIcon(props) {
  function link(linkType) {
    switch(linkType) {
      case 'artistogram':
        return (<Link to='/artistogram' className="artist-name"> {props.artistName} </Link>);
      case 'artist':
        return (<Link to='/artist' className="artist-name"> {props.artistName} </Link>);
      case 'playlist':
        return (<Link to='/playlist' className="artist-name"> {props.artistName} </Link>);
    };
  };

  const hexStyle = {
    backgroundImage: 'url(' + props.imageUrl + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  return (
    <li>
      <div className={props.className} style={hexStyle}>
        <div className="artist-container">
          <div className="artist-name">
            {link(props.linkType)}
          </div>
        </div>
      </div>
    </li>
  );
}
