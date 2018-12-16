import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import Artistogram from './artistogram';
import { decades, res, navBarLinksData } from './dataStore';
import { connect } from 'react-redux';

export function ArtistogramPage(props) {
  const links = ["sign up", "create new artistogram", "view playlist", "save artistogram"];
  const pageTitle = `Artistogram of ${props.focalArtist.name}`;
return (
  <div>
    <header>
      <NavBar links={links} playlist='add' title={pageTitle} />
    </header>
    <Artistogram />
  </div>
)
}

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist,
});

export default connect(mapStateToProps)(ArtistogramPage);
