import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import Decade from './decade';
import { decades, decadeWords, res } from './dataStore';
import {connect} from 'react-redux';

export function Artistogram(props) {
  const decadeSections = decades.map((decade, index) => <Decade title={decade} class={`decade ${decadeWords[index]}`} />);
    return (
      <div>
        <h1>Musicians related to... {props.focalArtist}</h1>
        <section class="artistogram">
          {decadeSections}
        </section>
      </div>
    );
  }

  const mapStateToProps = (state, props) => ({
    focalArtist: state.focalArtist
});

export default connect(mapStateToProps)(Artistogram);
