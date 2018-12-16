import React, { Component } from 'react';
import './main.css';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import CreateArtistogram from './create-artistogram';
import landingBg from '../landingBG.png';
import agImage from '../artistogramImage.png';

export default function LandingPage(props) {
  const navBarLinks = ["sign up"];
  return (
    <div>
      <header>
        <NavBar links={navBarLinks} title="Artistogram"/>
      </header>
      <main>
        <section className="intro-bg" role="region">
          <div className="intro-container">
            <div className="intro-text">
              <h2>What is an Artistogram?</h2>
              <p>An artistogram is a display of musicians related to an artist sorted by decade.
                It is an awesome way to discover artists similar to your favourites and create playlists.
              </p>
              <CreateArtistogram />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
