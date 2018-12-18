import React from 'react';
import './main.css';
import './main.css';
import './hex-grid.css';
import NavBar from './nav-bar';
import CreateArtistogram from './create-artistogram';

export default function LandingPage(props) {
  const navBarLinks = ["sign up"];
  return (
    <div>
      <header>
        <NavBar links={navBarLinks} title="Artistogram"/>
      </header>
      <main>
        <section className="intro-bg">
          <div className="intro-container">
            <div className="intro-text">
              <h2>What is an Artistogram?</h2>
              <p>An artistogram is a chronological display of musicians related to an artist.
                It is an awesome way to discover artists similar to your favourites and create playlists. Anyone can
                create and view an artistogram, sign up or login to save artistograms and playlists for later.
              </p>
              <CreateArtistogram />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
