import React, { Component } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import { navBarLinksData } from './dataStore';
import LoggedIn from './logged-in';
import uuid from 'uuid/v4';
import store from '../store.js';
import logo from '../aLogo.png';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
    function loggedIn(page) {
      if(page) {
        return '';
      } else {
        return <LoggedIn key={uuid()} store={store}/>;
      }
    }
    return (
      <nav>
        <div className="logo"><Link to='/dashboard'><img src={logo} alt="Click for dashboard"/></Link></div>
        <h1 className="nav-title">{this.props.title}</h1>
        <ul>
          {loggedIn(this.props.page)}
          {navBarLinks}
        </ul>

      </nav>
    )
  }
}
