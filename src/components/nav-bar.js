import React, { Component } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
import { navBarLinksData } from './dataStore';
import LoggedIn from './logged-in';

export default function NavBar(props) {
  const navBarLinks =
    navBarLinksData.reduce((acc, data) => {
      props.links.forEach(link => {
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
      </ul>
    </nav>
  )
}
