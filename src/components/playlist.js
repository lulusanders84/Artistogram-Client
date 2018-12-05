import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import './playlist.css';
import { connect } from 'react-redux';
import { addPlaylist } from '../actions';
import PlaylistItem from './playlist-item';

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(addPlaylist(this.props.playlist));
  }
  render () {
    const songs = this.props.playlist.map(song => {
      return (
        <PlaylistItem
        name={song.trackinfo.track.name}
        artist={song.trackinfo.track.artist.name}
        duration={song.trackinfo.track.duration} />
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
  focalArtist: state.focalArtist,
});

export default connect(mapStateToProps)(Playlist);
