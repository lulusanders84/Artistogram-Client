import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import Decade from './decade';
import { buildArtistogramArtists, fetchAndSetFocalArtistInfo } from '../actions';
import { decades, decadeWords, res } from './dataStore';
import {connect} from 'react-redux';
import uuid from 'uuid/v4';

export class Artistogram extends React.Component {
  constructor(props) {
    super(props);
  };
  componentDidMount() {
    this.props.dispatch(buildArtistogramArtists(this.props.focalArtist.name))
    this.props.dispatch(fetchAndSetFocalArtistInfo(this.props.focalArtist.name))
}
  render() {
    window.scrollTo(0, 0);
    const decadeSections = decades.map((decade, index) =>
        <Decade
          title={decade}
          class={`decade ${decadeWords[index]}`}
          decade={decadeWords[index]}
          key={uuid()}
        />
    );
      return (
        <div>
          <h1>musicians related to...{this.props.focalArtist.name}</h1>
          <h2>click on an artist's name to see their artistogram</h2>
          <section className="artistogram">
            {decadeSections}
          </section>
        </div>
      );
  }
}

  const mapStateToProps = (state, props) => ({
    focalArtist: state.focalArtist,
    artistogramArtists: state.artistogramArtists,
    playlist: state.playlist,
});

export default connect(mapStateToProps)(Artistogram);
