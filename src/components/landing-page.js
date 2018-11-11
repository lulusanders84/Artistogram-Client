import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import CreateArtistogram from './create-artistogram';

export default function LandingPage(props) {
  const navBarLinks = ["log in", "sign up"];
  return (
    <div>
      <NavBar links={navBarLinks}/>
      <CreateArtistogram />
    </div>
  )
}
