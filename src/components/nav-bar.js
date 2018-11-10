import React, { Component } from 'react';
import './main.css';

export default function NavBar(props) {
  return (
    <nav>
      <ul>
        <li><a href="log-in.html">Log in</a></li>
        <li><a href="sign-up.html">Sign up</a></li>
        <li><a href="dashboard.html">Dashboard</a></li>
        <li><a href="playlist.html">Create Playlist</a></li>
        <li><a href="landing-page.html">Create New Artistogram</a></li>
      </ul>
    </nav>
  )
}
