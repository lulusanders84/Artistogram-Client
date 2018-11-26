import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import CreateArtistogram from './create-artistogram';

export default function LandingPage(props) {
  const navBarLinks = ["sign up"];
  function createArtistogram(event) {
        event.preventDefault();
        props.history.push(`/artistogram`);
  }
  return (
    <div>
      <NavBar links={navBarLinks}/>
      <CreateArtistogram />
    </div>
  )
}
