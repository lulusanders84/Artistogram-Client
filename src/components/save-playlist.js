import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './forms.css';
import {putSavedPlaylist, saveDestination} from '../actions';
import { connect } from 'react-redux';
import LogIn from './log-in';
import NavBar from './nav-bar';

export class SavePlaylist extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(saveDestination('/save-playlist'));
  }
  handleSavePlaylist(event) {
    event.preventDefault();
    const name = this.textInput.value;
    const playlistData = {
      username: this.props.username,
      playlist: this.props.playlist,
      name,
      imageUrl: this.props.focalArtist.imageUrl
    };
    this.props.dispatch(putSavedPlaylist(playlistData, this.props.history));
  }
  render() {
    if(this.props.loggedIn) {
      const playlistTitle = this.props.focalArtist.name;
      return (
        <section>
          <NavBar links={[]} title='' />
          <form>
            <fieldset>
              <label for="title">
                Playlist Title
                <input
                  type="text"
                  id="title"
                  ref={input => this.textInput = input}
                  defaultValue={playlistTitle} />
              </label>
                <button
                  onClick={event => this.handleSavePlaylist(event)}>
                    Save Playlist
                </button>
            </fieldset>
          </form>
        </section>
      )
    } else {
      return <LogIn />
    }
  }
}

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist,
  playlist: state.playlist,
  username: state.username,
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(SavePlaylist);
