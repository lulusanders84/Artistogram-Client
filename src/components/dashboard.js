import React, { Component } from 'react';
import './main.css';
import './dashboard.css';
import List from './list';
import NavBar from './nav-bar';
import LogIn from './log-in';
import { connect } from 'react-redux';
import capitalizeName from '../capitalizeName';

export function Dashboard(props) {
  if(props.loggedIn) {
    const navBarLinks = ["create new artistogram"];
    const pageTitle = `${capitalizeName(props.user)}'s Dashboard`;
    return (
      <div>
        <NavBar links={navBarLinks} title={pageTitle}/>
        <List user={props.user} listType="artistogram" linkType="artistogram" />
        <List user={props.user} listType="playlist" linkType="playlist" />
      </div>
    )
  } else {
    return (
      <LogIn />
    )
  }
}

const mapStateToProps = state => ({
  user: state.username,
  loggedIn: state.loggedIn
});

export default connect(mapStateToProps)(Dashboard);
