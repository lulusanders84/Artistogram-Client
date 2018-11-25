import React, { Component } from 'react';
import './main.css';
import './dashboard.css';
import List from './list';
import NavBar from './nav-bar';
import { connect } from 'react-redux'


export function Dashboard(props) {
  const navBarLinks = ["log out", "create new artistogram"];
  return (

    <div>
      <NavBar links={navBarLinks}/>
      <h1>{props.user}'s dashboard</h1>
      <List user={props.user} listType="artistogram" linkType="artistogram" />
      <List user={props.user} listType="playlist" linkType="playlist" />
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  user: state.user
});

export default connect(mapStateToProps)(Dashboard);
