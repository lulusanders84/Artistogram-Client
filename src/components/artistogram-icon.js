import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './hex-grid.css';
import { setFocalArtist, buildArtistogramArtists } from '../actions';
import { connect } from 'react-redux';


export class ArtistogramIcon extends React.Component {
  constructor(props) {
    super(props)
    const { artistName, imageUrl } = props;
    this.artist = {name: artistName, imageUrl}
  }

  link(linkType) {
    return (
      <Link
        to='/artistogram'
        className="artist-name">
          <div onClick={event => this.handleSetFocalArtist(this.artist)}>{this.artist.name}</div>
      </Link>
    );
  };

  handleSetFocalArtist(artist) {
    this.props.dispatch(setFocalArtist(artist));
    this.props.dispatch(buildArtistogramArtists(artist.name));
  }

  render() {
    const hexStyle = {
      backgroundImage: 'url(' + this.artist.imageUrl + ')',
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

export default connect()(ArtistogramIcon);
