import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import './forms.css';
import {addSavedArtistogram} from '../actions';
import { connect } from 'react-redux';

export class SaveArtistogram extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSaveArtistogram(event) {
    event.preventDefault();
    console.log("handlesaveArtistogram");
    const title = this.textInput.value;
    this.props.dispatch(addSavedArtistogram(title, this.props.focalArtist.imageUrl));
    this.props.history.push('/dashboard');
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
});

export default connect(mapStateToProps)(SaveArtistogram);
