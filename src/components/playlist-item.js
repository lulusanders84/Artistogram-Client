import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import './playlist.css';

export default function(props) {


    return (
      <li>
        <div className="song">{props.name}</div>
        <div className="playlist-artist">{props.artist}</div>
        <div className="length">{props.duration}</div>
      </li>

    )
}
