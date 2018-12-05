import React, { Component } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import { navBarLinksData } from './dataStore';
import LoggedIn from './logged-in';
import CreatePlaylist from './create-playlist';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let createPlaylistButton = 'hello';
    switch(this.props.playlist) {
      case 'add':
        createPlaylistButton = `<CreatePlaylist />`;
      default:
        createPlaylistButton = '';
    }
    const navBarLinks =
      navBarLinksData.reduce((acc, data) => {
        this.props.links.forEach(link => {
          if(link == data.link) {
            acc.push(<li><Link to={data.url}  className="nav-bar-link">{link}</Link></li>);
          }
        })
        return acc;
      }, []);

    return (
      <nav>
        <ul>
          <LoggedIn />
          {navBarLinks}
          <CreatePlaylist />
        </ul>
      </nav>
    )
  }
}
