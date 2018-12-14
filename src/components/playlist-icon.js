import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './hex-grid.css';
import {setFocalArtist, buildArtistogramArtists, setPlaylist} from '../actions';
import { connect } from 'react-redux';

export class PlaylistIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  link() {
    const artistName = this.props.artistName;
    return (
      <Link
        to='/playlist'
        className="artist-name">
          <div onClick={event => this.handlePlaylistSelection(artistName)}>{artistName}</div>
      </Link>
    );
  };
  handlePlaylistSelection(artistName) {
    const selectedPlaylist = this.props.savedPlaylists.reduce((acc, savedPlaylist) => {
      if(savedPlaylist.name === artistName) {
        acc = savedPlaylist;
      }
      return acc;
    }, {});
    this.props.dispatch(setFocalArtist(selectedPlaylist));
    this.props.dispatch(setPlaylist(selectedPlaylist.playlist));
  }
  render() {
    const hexStyle = {
      backgroundImage: 'url(' + this.props.imageUrl + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    return (
      <li>
        <div className={this.props.className} style={hexStyle}>
          <div className="artist-container">
            <div className="artist-name">
              {this.link()}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist,
  artistogramArtists: state.artistogramArtists,
  savedPlaylists: state.savedPlaylists,
});

export default connect(mapStateToProps)(PlaylistIcon);
