import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import './playlist.css';
import { playlist } from './dataStore';
import { connect } from 'react-redux';

export class Playlist extends React.Component {
  render () {
    const songs = playlist.map(song => {
      return (
        <li>
          <div className="song">{song.name}</div>
          <div className="playlist-artist">{song.artist}</div>
          <div className="length">{song.length}</div>
        </li>
      )
    })
    window.scrollTo(0, 0);
    return (
      <div>
        <h1>{this.props.focalArtist} artistogram playlist</h1>
        <button className="export">Export to Spotify</button>
        <ul className="playlist-list">
          <li>
            <div className="song">Title</div>
            <div className="playlist-artist">Artist</div>
            <div className="length">Length</div>
          </li>
          {songs}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist
});

export default connect(mapStateToProps)(Playlist);
