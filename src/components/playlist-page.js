import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import Playlist from './playlist';

export default function PlaylistPage(props) {
  const navBarLinks = ["sign up", "dashboard", "create new artistogram"];
  return (
    <div>
      <NavBar links={navBarLinks} />
      <Playlist />
    </div>
  )
}
