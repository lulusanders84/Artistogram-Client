import React, { Component } from 'react';
import './main.css';
import './artist-icon.css';
import './dashboard.css';
import { userData } from './dataStore';
import ArtistIcon from './artist-icon';
import { emptyHex, addEmptyHex } from './empty-hex';

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
        <ArtistIcon imageUrl={listItem.image} artistName={listItem.name} className="hexagon" linkType={props.linkType} />
      )
  });
  addEmptyHex(listItems);
  const listClassName = `${props.listType}-list`;
  return (
    <section className={listType}>
  <h2><div class="title-container">{listType}</div></h2>
  <ul id="grid" class="clear">
    {listItems}
  </ul>
</section>
  )
}
