import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import CreateArtistogram from './create-artistogram';

export default function CreateArtistogramPage(props) {
  const navBarLinks = ["sign up"];
  return (
    <div>
      <NavBar links={navBarLinks} title="Create an Artistogram"/>
      <CreateArtistogram />
    </div>
  )
}
