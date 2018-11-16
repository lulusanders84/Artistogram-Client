import React, { Component } from 'react';
import './main.css';
import './dashboard.css';
import List from './list';
import NavBar from './nav-bar';


export default function Dashboard(props) {
  const navBarLinks = ["log out", "create new Artistogram"];
  return (

    <div>
      <NavBar links={navBarLinks}/>
      <h1>Dashboard</h1>
      <List user="Lucy" listType="artistogram" />
      <List user="Lucy" listType="playlist" />
    </div>
  )
}
