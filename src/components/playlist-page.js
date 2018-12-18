import React from 'react';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import Playlist from './playlist';
import { connect } from 'react-redux';
import { saveDestination } from '../actions';

export class PlaylistPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(saveDestination('/playlist'));
  }
  render() {
    const navBarLinks = ["sign up", "dashboard", "save playlist", "create new artistogram"];
    const pageTitle = `${this.props.focalArtist.name} Playlist`;
    return (
      <div>
        <NavBar links={navBarLinks} title={pageTitle} />
        <Playlist />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist,
});

export default connect(mapStateToProps)(PlaylistPage);
