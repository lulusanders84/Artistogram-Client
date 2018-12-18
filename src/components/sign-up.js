import React from 'react';
import './main.css';
import './forms.css';
import { addNewUser } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from './nav-bar';

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
    this.props.dispatch(addNewUser(newUser, this.props.history));
  }
  render() {
    console.log(this.props.errorMsg);
    return (
      <div>
      <header>
        <NavBar links={[]} page={true} title="Sign Up" />
      </header>
        <main>
          <p className="error">{this.props.errorMsg}</p>
          <form onSubmit={event => this.handleSignUp(event)}>
            <fieldset>
              <p>All fields required</p>
              <label for="first">
                First Name
                <input type="text" name="first" ref={input => this.firstName = input} required />
              </label>
              <label for="last">
                Last Name
                <input type="text" name="last" ref={input => this.lastName = input} required />
              </label>
              <label for="email">
                Email
                <input type="email" name="email" ref={input => this.email = input} required />
              </label>
              <label for="username">
                Username
                <input type="text" name="username" ref={input => this.username = input} required />
              </label>
              <label for="password">
                Password
                <input type="password" name="password" ref={input => this.password = input} required />
              </label>
              <button>Submit</button>
            </fieldset>
          </form>
          <p className="register">Already registered? Click <Link to='/login'>here</Link> to login</p>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  errorMsg: state.errorMsg
});

export default connect(mapStateToProps)(SignUp);
