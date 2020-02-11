import React from 'react';
import './main.css';
import './hex-grid.css';
import './playlist.css';

export default function(props) {

    function setDuration(duration) {
      const min = Math.floor(duration / 60000);
      let sec = Math.round((duration % 60000) / 1000).toString();
      if(sec.length === 1) {
        sec = "0" + sec;
      }
      return `${min}:${sec}`;
    }
    return (
      <li>
        <div className="song">{props.name}</div>
        <div className="playlist-artist">{props.artist}</div>
        <div className="year">{props.year}</div>        
        <div className="length">{setDuration(props.duration)}</div>
      </li>

    )
}
