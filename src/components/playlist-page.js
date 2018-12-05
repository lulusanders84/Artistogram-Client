import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import Playlist from './playlist';
import { connect } from 'react-redux';

export class PlaylistPage extends React.Component {

  render() {
    const navBarLinks = ["sign up", "dashboard", "create new artistogram"];
    return (
      <div>
        <NavBar links={navBarLinks} />
        <Playlist playlist={this.props.playlist}/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist,
  playlist: state.playlist
});

export default connect(mapStateToProps)(PlaylistPage);
