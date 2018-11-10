import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import Decade from './decade';
import { decades, decadeWords, res } from './dataStore';

export default function Artistogram(props) {
  const decadeSections = decades.map((decade, index) => <Decade title={decade} class={`decade ${decadeWords[index]}`} />);
    return (
      <div>
        <h1>Musicians related to... {res.focalArtist}</h1>
        <section class="artistogram">
          {decadeSections}
        </section>
      </div>
    );
  }
