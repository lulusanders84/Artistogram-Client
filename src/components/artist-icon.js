import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './hex-grid.css';
import {setFocalArtist, buildArtistogramArtists} from '../actions';
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
        className="artist-name"
        onClick={event => this.handleSetFocalArtist(artistName)}>
          {artistName}
      </Link>
    );
  };

  handleSetFocalArtist(artist) {
    this.props.dispatch(setFocalArtist(artist));
    this.props.dispatch(buildArtistogramArtists(artist));
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

export default connect()(ArtistIcon);
