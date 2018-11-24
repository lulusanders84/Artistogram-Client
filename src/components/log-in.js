import React, { Component } from 'react';
import NavBar from './nav-bar';
import './main.css';
import './forms.css';
import {setUser} from '../actions'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

export class LogIn extends React.Component {

  handleUser(event) {
    event.preventDefault();
    this.props.dispatch(setUser(this.textInput.value));
    this.props.history.push(`/dashboard`);
  }
  render() {
  return (
    <section>
      <h1>Log In</h1>
      <form onSubmit={event => this.handleUser(event)}>
        <fieldset>
          <label for="username">
            Username
            <input type="text" id="username" ref={input => this.textInput = input} />
          </label>
          <label for="password">
            Password
            <input type="text" id="password" />
          </label>
          <button>Log in</button>
        </fieldset>
      </form>
    </section>
  )
}
}

export default withRouter(connect()(LogIn));
