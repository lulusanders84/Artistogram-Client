import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import './playlist.css';
import { connect } from 'react-redux';
import { addPlaylist } from '../actions';
import PlaylistItem from './playlist-item';
import uuid from 'uuid/v4';

// <PlaylistItem
//   name={song.trackinfo.track.name}
//   artist={song.trackinfo.track.artist.name}
//   duration={song.trackinfo.track.duration}
//   key={uuid()} />
export class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const songs = this.props.playlist.slice(0, 4).map(song => {
      return (
        <PlaylistItem
          name="oasis" />
      )
    })
    console.log(this.props.playlist, 'playlist from store');
    console.log(songs);
    window.scrollTo(0, 0);
    return (
      <div>
        <h1>{this.props.focalArtist.name} artistogram playlist</h1>
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
  focalArtist: state.focalArtist,
  playlist: state.playlist,

});

export default connect(mapStateToProps)(Playlist);
