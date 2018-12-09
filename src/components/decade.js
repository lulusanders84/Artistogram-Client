import React, { Component } from 'react';
import './main.css';
import './decade.css';
import './hex-grid.css';
import { res, randomImages } from './dataStore';
import ArtistogramIcon from './artistogram-icon';
import { buildArtistogramArtists } from '../actions';
import { addEmptyHex } from './empty-hex';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

export class Decade extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const decadeArtists = `${this.props.decade}Artists`;
    let artistIcons =
      this.props[decadeArtists].map(artistIcon =>
        <ArtistogramIcon
          imageUrl={artistIcon.imageUrl}
          artistName={artistIcon.name}
          className="hexagon"
          linkType="artistogram"
          key={uuid()}/>);
    addEmptyHex(artistIcons);
    return (
      <section className={this.props.class}>
          <h2><div className="decade title-container">{this.props.title}</div></h2>
          <div className="decade-container">
            <ul id="grid" className="clear">
              {artistIcons}
            </ul>
          </div>
      </section>
    )
  }
}

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist,
  fiftiesArtists: state.fifties,
  sixtiesArtists: state.sixties,
  seventiesArtists: state.seventies,
  eightiesArtists: state.eighties,
  nintiesArtists: state.ninties,
  aughtsArtists: state.aughts,
  tensArtists: state.tens,
});

export default connect(mapStateToProps)(Decade);
