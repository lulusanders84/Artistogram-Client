import React from 'react';
import './main.css';
import './hex-grid.css';
import './playlist.css';
import { connect } from 'react-redux';
import PlaylistItem from './playlist-item';
import uuid from 'uuid/v4';


export class Playlist extends React.Component {
  render() {
    const songs = this.props.playlist.map((song, index) => {
      return (
        <PlaylistItem
          name={song.name}
          artist={song.artist}
          duration={song.duration}
          year={song.year}
          key={uuid()} />
      )
    })
    window.scrollTo(0, 0);
    return (
      <div>
        <ul className="playlist-list">
          <li>
            <div className="song">Title</div>
            <div className="playlist-artist">Artist</div>
            <div className="year">Year</div>
            <div className="length">Length</div>
          </li>
          {songs}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  playlist: state.playlist,

});

export default connect(mapStateToProps)(Playlist);
