import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './forms.css';
import {addSavedPlaylist} from '../actions';
import { connect } from 'react-redux';

export class SavePlaylist extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSavePlaylist(event) {
    event.preventDefault();
    const title = this.textInput.value;
    this.props.dispatch(addSavedPlaylist(this.props.playlist, title, this.props.focalArtist.imageUrl));
    this.props.history.push('/dashboard');
  }
  render() {
    const playlistTitle = this.props.focalArtist.name;
    return (
      <section>
        <h1>Save Playlist?</h1>
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
  }
}

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist,
  playlist: state.playlist
});

export default connect(mapStateToProps)(SavePlaylist);
