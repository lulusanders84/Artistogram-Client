import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import Artistogram from './artistogram';
import { decades, res } from './dataStore';

export default function ArtistogramPage(props) {
return (
  <div>
    <header>
      <NavBar />
    </header>
    <Artistogram />
  </div>
)
}
