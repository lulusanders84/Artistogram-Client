import React, { Component } from 'react';
import NavBar from './nav-bar';
import './main.css';
import './forms.css';

export default function LogIn(props) {
  return (
    <section>
      <h1>Log In</h1>
      <form>
        <fieldset>
          <label for="username">
            Username
            <input type="text" id="username" />
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
