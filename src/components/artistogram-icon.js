import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './hex-grid.css';
import { setFocalArtistName, buildArtistogramArtists } from '../actions';
import { connect } from 'react-redux';


export class ArtistogramIcon extends React.Component {
  link(linkType) {
    const artistName = this.props.artistName;
    return (
      <Link
        to='/artistogram'
        className="artist-name">
          <div onClick={event => this.handleSetFocalArtist(artistName)}>{artistName}</div>
      </Link>
    );
  };

  handleSetFocalArtist(artist) {
    this.props.dispatch(setFocalArtistName(artist));
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

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist,
  artistogramArtists: state.artistogramArtists,
  savedPlaylists: state.savedPlaylists,
});

export default connect()(ArtistogramIcon);
