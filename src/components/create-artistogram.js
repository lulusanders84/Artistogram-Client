import React, { Component } from 'react';
import './main.css';
import './forms.css';
import './hex-grid.css';
import './create-artistogram.css';
import {setFocalArtist} from '../actions'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

export class CreateArtistogram extends React.Component {

  handleSetFocalArtist(event) {
    event.preventDefault();
    this.props.dispatch(setFocalArtist(this.textInput.value));
    this.props.history.push(`/artistogram`);
  }
  render() {

    return (

      <div id="create">
        <h1>Artistogram</h1>
        <form onSubmit={event => this.handleSetFocalArtist(event)}>
          <fieldset>
            <legend>Enter your favourite musician or band to create an Artistogram</legend>
            <div>
              <input type="text" ref={input => this.textInput = input}/>
              <input type="submit" />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default withRouter(connect()(CreateArtistogram));
