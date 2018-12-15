import React, { Component } from 'react';
import NavBar from './nav-bar';
import './main.css';
import './forms.css';
import {loginUser} from '../actions'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

export class LogIn extends React.Component {

  handleUser(event) {
    event.preventDefault();
    const user = {
      username: this.username.value,
      password: this.password.value,
    };
    this.props.dispatch(loginUser(user, this.props.history));
  }
  render() {
  return (
    <section>
      <h1>Log In</h1>
      <form onSubmit={event => this.handleUser(event)}>
        <fieldset>
          <label for="username">
            Username
            <input type="text" id="username" ref={input => this.username = input} />
          </label>
          <label for="password">
            Password
            <input type="password" id="password" ref={input => this.password = input} />
          </label>
          <button>Log in</button>
        </fieldset>
      </form>
    </section>
  )
}
}

export default withRouter(connect()(LogIn));
