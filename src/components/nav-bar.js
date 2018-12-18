import React, { Component } from 'react';
import './main.css';
import './dropdown.css';
import { Link } from 'react-router-dom';
import { navBarLinksData } from './dataStore';
import LoggedIn from './logged-in';
import uuid from 'uuid/v4';
import store from '../store.js';
import logo from '../aLogo.png';
import { saveDestination } from '../actions';
import { connect } from 'react-redux';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSaveDestination(event) {
    event.preventDefault();
    this.props.dispatch(saveDestination('/dashboard'));
  }
  render() {
    const navBarLinks =
      navBarLinksData.reduce((acc, data) => {
        this.props.links.forEach(link => {
          let linkComponent = <Link to={data.url}  className="nav-bar-link">{link}</Link>;
          if(link == data.link) {
            acc.push(<Link to={data.url} className="nav-bar-link"><li key={uuid()}>{link}</li></Link>);
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
    function buttonStyle() {
      if(navBarLinks.length === 0) {
        return {
          display: 'none'
        };
      }
    }
    return (
      <nav>
        <div title="Click for dashboard" className="logo" onClick={event => this.handleSaveDestination(event)}>
          <Link to='/dashboard'><img src={logo} alt="Click for dashboard"/></Link>
        </div>
        <h1 className="nav-title">{this.props.title}</h1>
        <ul class="menu">
          {loggedIn(this.props.page)}
          {navBarLinks}
        </ul>
        <div class="dropdown">
          <button class="dropbtn" style={buttonStyle()}>Menu</button>
          <ul class="dropdown-content">
            {loggedIn(this.props.page)}
            {navBarLinks}
          </ul>
        </div>

      </nav>
    )
  }
}

export default connect()(NavBar);
