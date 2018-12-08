import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './hex-grid.css';
import {setFocalArtist, buildArtistogramArtists, addPlaylist} from '../actions';
import { connect } from 'react-redux';

export class ArtistIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  link(linkType) {
    const artistName = this.props.artistName;
    const url = `/${linkType}`;

    return (
      <Link
        to={url}
        className="artist-name">
          <div onClick={event => this.handleSetFocalArtist(artistName)}>{artistName}</div>
      </Link>
    );
  };

  handleSetFocalArtist(artist) {
    this.props.dispatch(setFocalArtist(artist));
    this.props.dispatch(buildArtistogramArtists(artist));
    // const playlist = this.props.savedPlaylists.filter(playlist => playlist.trackinfo.track.artist.name === artist);
    console.log(this.props.savedPlaylists);
    // this.props.dispatch(addPlaylist(playlist));
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
              {this.link(this.props.linkType)}
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

export default connect()(ArtistIcon);
