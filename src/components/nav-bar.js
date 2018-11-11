import React, { Component } from 'react';
import './main.css';

export default function NavBar(props) {
  const links = props.links.map(link => {
    return <li>{link}</li>;
  })
  return (
    <nav>
      <ul>
        {links}
      </ul>
    </nav>
  )
}
