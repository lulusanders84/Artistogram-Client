import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import Artistogram from './artistogram';
import { decades, res } from './dataStore';

export default function ArtistogramPage(props) {
  const navBarLinks = ["log in", "sign up", "dashboard", "create playlist", "create new artistogram"];
return (
  <div>
    <header>
      <NavBar links={navBarLinks} />
    </header>
    <Artistogram />
  </div>
)
}
