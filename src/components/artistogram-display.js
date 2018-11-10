import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import Decade from './decade';
import { decades, res } from './dataStore';

export default function ArtistogramDisplay(props) {
  const decadeSections = decades.map(decade => <Decade title={decade} />);
    return (
      <div>
        <h1>Musicians related to... {res.focalArtist}</h1>
        <section class="artistogram">
          {decadeSections}
        </section>
      </div>
    );
  }
