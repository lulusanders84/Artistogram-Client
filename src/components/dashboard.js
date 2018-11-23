import React, { Component } from 'react';
import './main.css';
import './dashboard.css';
import List from './list';
import NavBar from './nav-bar';


export default function Dashboard(props) {
  const navBarLinks = ["log out", "create new artistogram"];
  return (

    <div>
      <NavBar links={navBarLinks}/>
      <h1>dashboard</h1>
      <List user="Lucy" listType="artistogram" linkType="artistogram" />
      <List user="Lucy" listType="playlist" linkType="playlist" />
    </div>
  )
}
