import React, { Component } from 'react';
import './main.css';
import './dashboard.css';
import { userData } from './dataStore';
import ListItem from './list-item';

export default function List(props) {
  const user = userData.reduce((acc, user) => {
    if(user.username === props.user) {
      acc = user;
    }
    return acc;
  }, {});
  const listType = `${props.listType}s`;
  const listItems = user[listType].map(listItem => {
      return (
        <ListItem artistName={listItem.name} imgSrc={listItem.image} />
      )
  });
  const listClassName = `${props.listType}-list`;
  return (
    <section className={listType}>
  <h2>{props.listType}s</h2>
  <ul className={listClassName}>
    {listItems}
  </ul>
</section>
  )
}
