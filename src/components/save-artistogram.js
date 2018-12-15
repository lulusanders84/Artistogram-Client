import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './forms.css';
import {putSavedArtistogram} from '../actions';
import { connect } from 'react-redux';

export class SaveArtistogram extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSaveArtistogram(event) {
    event.preventDefault();
    const name = this.textInput.value;
    const artistogramData = {
      username: this.props.username,
      name,
      imageUrl: this.props.focalArtist.imageUrl
    };
    this.props.dispatch(putSavedArtistogram(artistogramData, this.props.history));
  }
  render() {
    const artistogramTitle = this.props.focalArtist.name;
    return (
      <section>
        <h1>Save Artistogram?</h1>
        <form>
          <fieldset>
            <label for="title">
              Artistogram Title
              <input
                type="text"
                id="title"
                ref={input => this.textInput = input}
                defaultValue={artistogramTitle} />
            </label>
              <button
                onClick={event => this.handleSaveArtistogram(event)}>
                  Save Artistogram
              </button>
          </fieldset>
        </form>
      </section>
    )
  }
}

const mapStateToProps = (state, props) => ({
  focalArtist: state.focalArtist,
  username: state.username
});

export default connect(mapStateToProps)(SaveArtistogram);
