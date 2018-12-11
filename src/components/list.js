import React, { Component } from 'react';
import './main.css';
import './artist-icon.css';
import './dashboard.css';
import { userData } from './dataStore';
import PlaylistIcon from './playlist-icon';
import ArtistogramIcon from './artistogram-icon';
import { addEmptyHex } from './empty-hex';
import {connect} from 'react-redux';

export class List extends React.Component {
  render() {
    console.log("saved playlists: ", this.props.savedPlaylists);
    console.log("saved artistograms: ", this.props.savedArtistograms);
    const user = userData.reduce((acc, user) => {
      if(user.username === this.props.user) {
        acc = user;
      }
      return acc;
    }, {});
    const listType = `${this.props.listType}s`;
    let dataSource;
    console.log("listtype", listType);
    if(listType === 'playlists') {
        dataSource = this.props.savedPlaylists;
    } else if(listType == 'artistograms') {
        dataSource = this.props.savedArtistograms;
    }
    console.log("data source", dataSource);
    const listItems = dataSource.map(listItem => {
        if(dataSource === this.props.savedPlaylists) {
          return (
            <PlaylistIcon imageUrl={listItem.imageUrl} artistName={listItem.name} className="hexagon" linkType={this.props.linkType} />
          )
      } else {
        return (
          <ArtistogramIcon imageUrl={listItem.imageUrl} artistName={listItem.name} className="hexagon" linkType={this.props.linkType} />

        )
      }
    });
    addEmptyHex(listItems);
    const listClassName = `${this.props.listType}-list`;
    return (
      <section className={listType}>
    <h2><div class="title-container">{listType}</div></h2>
    <ul id="grid" class="clear">
      {listItems}
    </ul>
  </section>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.user,
  savedPlaylists: state.savedPlaylists,
  savedArtistograms: state.savedArtistograms
});

export default connect(mapStateToProps)(List);
