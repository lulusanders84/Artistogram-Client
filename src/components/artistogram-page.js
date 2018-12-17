import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import Artistogram from './artistogram';
import { decades, res, navBarLinksData } from './dataStore';
import { connect } from 'react-redux';
import { saveDestination } from '../actions';

export class ArtistogramPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(saveDestination('/artistogram'));
  }
  render() {
    const links = ["sign up", "create new artistogram", "view playlist", "save artistogram"];
    const pageTitle = `${this.props.focalArtist.name}`;
    return (
      <div>
        <header>
          <NavBar links={links} playlist='add' title={pageTitle} />
        </header>
        <Artistogram />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist,
});

export default connect(mapStateToProps)(ArtistogramPage);
