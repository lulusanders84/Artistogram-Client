import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import {buildArtistogramPlaylist} from '../actions'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

export class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
  }
  handleCreatePlaylist() {
    let artists = [
      ...this.props.fifties,
      ...this.props.sixties,
      ...this.props.seventies,
      ...this.props.eighties,
      ...this.props.ninties,
      ...this.props.aughts,
      ...this.props.tens
    ];
    this.props.dispatch(buildArtistogramPlaylist(artists));
  }
  render() {
    console.log("playlist: ", this.props.playlist)
    return(
      <li onClick={event => {this.handleCreatePlaylist(event)}}>
        <Link to="/playlist" className="nav-bar-link">create playlist</Link>
      </li>
    )
  }
}

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist,
  fifties: state.fifties,
  sixties: state.sixties,
  seventies: state.seventies,
  eighties: state.eighties,
  ninties: state.ninties,
  aughts: state.aughts,
  tens: state.tens,
  playlist: state.playlist
});

export default connect(mapStateToProps)(CreatePlaylist);
