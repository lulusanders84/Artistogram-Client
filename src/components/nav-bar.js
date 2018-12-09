import React, { Component } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import { navBarLinksData } from './dataStore';
import LoggedIn from './logged-in';
import uuid from 'uuid/v4';
import store from '../store.js';

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
          let linkComponent = <Link to={data.url}  className="nav-bar-link">{link}</Link>;
          if(link == data.link) {
            acc.push(<li key={uuid()}>{linkComponent}</li>);
          }
        })
        return acc;
      }, []);

    return (
      <nav>
        <ul>
          <LoggedIn key={uuid()} store={store}/>
          {navBarLinks}
        </ul>
      </nav>
    )
  }
}
