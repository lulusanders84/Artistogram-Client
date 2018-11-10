import React, { Component } from 'react';
import './main.css';

export default function NavBar(props) {
  return (
    <nav>
      <ul>
        <li>Log in</li>
        <li>Sign up</li>
        <li>Dashboard</li>
        <li>Create Playlist</li>
        <li>Create New Artistogram</li>
      </ul>
    </nav>
  )
}
