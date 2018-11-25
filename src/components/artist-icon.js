import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './hex-grid.css';
import {setFocalArtist} from '../actions';
import { connect } from 'react-redux';

export class ArtistIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  link(linkType) {
    const artistName = this.props.artistName;
    console.log(artistName);
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
    console.log(artist);
    this.props.dispatch(setFocalArtist(artist));
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
