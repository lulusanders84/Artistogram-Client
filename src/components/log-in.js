import React from 'react';
import NavBar from './nav-bar';
import './main.css';
import './forms.css';
import {loginUser} from '../actions'
import {connect} from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

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
        <NavBar links={[]} page={true} title="Log In" />
        <p className="error">{this.props.errorMsg}</p>
        <form onSubmit={event => this.handleUser(event)}>
          <fieldset>
            <label htmlFor="username">
              Username
              <input type="text" id="username" ref={input => this.username = input} defaultValue="DemoUser"/>
            </label>
            <label htmlFor="password">
              Password
              <input type="password" id="password" ref={input => this.password = input} defaultValue="password"/>
            </label>
            <button>Log in</button>
          </fieldset>
        </form>
        <p className="register">Not registered? Click <Link to='/signup'>here</Link> to sign up.
        <br />Log in as DemoUser with password 'password' to try it out.
        </p>
      </section>
    )
  }
}

const mapStateToProps = (state, props) => ({
  errorMsg: state.errorMsg
});

export default withRouter(connect(mapStateToProps)(LogIn));
