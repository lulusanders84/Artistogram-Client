import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import Artistogram from './artistogram';
import { decades, res, navBarLinksData } from './dataStore';

export default function ArtistogramPage(props) {
  const links = ["sign up", "dashboard", "create playlist", "create new artistogram"];

return (
  <div>
    <header>
      <NavBar links={links} />
    </header>
    <Artistogram />
  </div>
)
}
