import React, { Component } from 'react';
import './main.css';
import './decade.css';
import './hex-grid.css';
import { res, randomImages } from './dataStore';
import ArtistIcon from './artist-icon';
import { addEmptyHex } from './empty-hex';
import { connect } from 'react-redux';

export function Decade(props) {
  let artistIcons =
    props.artistogramArtists.map(artistIcon =>
      <ArtistIcon imageUrl={artistIcon.imageUrl} artistName={artistIcon.name} className="hexagon" linkType="artist" />);
  addEmptyHex(artistIcons);
  return (
    <section className={props.class}>
        <h2><div class="decade title-container">{props.title}</div></h2>
        <div className="decade-container">
          <ul id="grid" class="clear">
            {artistIcons}
          </ul>
        </div>
    </section>
  )
}

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist,
  artistogramArtists: state.artistogramArtists
});

export default connect(mapStateToProps)(Decade);
