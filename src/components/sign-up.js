import React, { Component } from 'react';
import './main.css';
import './forms.css';

export default function SignUp(props) {
  return (
    <section>
      <h1>Sign Up</h1>
      <form>
        <fieldset>
          <label for="first">
            First Name
            <input type="text" name="first" />
          </label>
          <label for="last">
            Last Name
            <input type="text" name="last" />
          </label>
          <label for="username">
            Username
            <input type="text" name="username" />
          </label>
          <label for="password">
            Password
            <input type="text" name="password" />
          </label>
          <button>Submit</button>
        </fieldset>
      </form>
    </section>
  )
}
