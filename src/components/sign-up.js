import React, { Component } from 'react';
import './main.css';
import './forms.css';
import { addNewUser } from '../actions';
import { connect } from 'react-redux';

export class SignUp extends React.Component {
  handleSignUp(event) {
    event.preventDefault();
    const newUser = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      username: this.username.value,
      password: this.password.value,
    };
    this.props.dispatch(addNewUser(newUser));
    this.props.history.push(`/dashboard`);
  }
  render() {
    return (
      <section>
        <h1>Sign Up</h1>
        <form onSubmit={event => this.handleSignUp(event)}>
          <fieldset>
            <label for="first">
              First Name
              <input type="text" name="first" ref={input => this.firstName = input} />
            </label>
            <label for="last">
              Last Name
              <input type="text" name="last" ref={input => this.lastName = input} />
            </label>
            <label for="email">
              Email
              <input type="email" name="email" ref={input => this.email = input} />
            </label>
            <label for="username">
              Username
              <input type="text" name="username" ref={input => this.username = input} />
            </label>
            <label for="password">
              Password
              <input type="password" name="password" ref={input => this.password = input} />
            </label>
            <button>Submit</button>
          </fieldset>
        </form>
      </section>
    )
  }
}

// const mapStateToProps = (state, props) => ({
//   focalArtist: state.focalArtist,
// });

export default connect()(SignUp);
