import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import './playlist.css';

export default class PlaylistItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <li>
        <div className="song">{this.props.name}</div>
        <div className="playlist-artist">{this.props.artist}</div>
        <div className="length">{this.props.duration}</div>
      </li>

    )
  }
}
