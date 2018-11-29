import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import Decade from './decade';
import { fetchSimilarArtists, fetchTopAlbums } from '../actions';
import { decades, decadeWords, res } from './dataStore';
import {connect} from 'react-redux';

export class Artistogram extends React.Component {
  constructor(props) {
    super(props);
  };
  componentDidMount() {
    this.props.dispatch(fetchSimilarArtists(this.props.focalArtist))
}
  render() {
    const decadeSections = decades.map((decade, index) => <Decade title={decade} class={`decade ${decadeWords[index]}`} />);
      return (
        <div>
          <h1>musicians related to...{this.props.focalArtist}</h1>
          <section class="artistogram">
            {decadeSections}
          </section>
        </div>
      );
  }
}

  const mapStateToProps = (state, props) => ({
    focalArtist: state.focalArtist,
    artistogramArtists: state.artistogramArtists,
    topAlbums: state.topAlbums,
});

export default connect(mapStateToProps)(Artistogram);
