import React from 'react';
import ArtistIcon from './artist-icon';
import uuid from 'uuid/v4';

export function addEmptyHex(artistIcons) {
  for(let i=0; i < artistIcons.length; i++) {
    let emptyHex = <ArtistIcon imageUrl='' key={uuid()} />;
    if (i % 8 == 0) {
      artistIcons.splice(i, 0, emptyHex);
    }
  }
}
