import React, { Component } from 'react';
import './main.css';
import './hex-grid.css';
import './playlist.css';
import { playlist } from './dataStore';

export default function Playlist(props) {
  const songs = playlist.map(song => {
    return (
      <li>
        <div className="song">{song.name}</div>
        <div className="playlist-artist">{song.artist}</div>
        <div className="length">{song.length}</div>
      </li>
    )
  })
  return (
    <div>
      <h1>{props.artistName} artistogram playlist</h1>
      <button className="export">Export to Spotify</button>
      <ul className="playlist-list">
        <li>
          <div className="song">Title</div>
          <div className="playlist-artist">Artist</div>
          <div className="length">Length</div>
        </li>
        {songs}
      </ul>
    </div>
  )
}
