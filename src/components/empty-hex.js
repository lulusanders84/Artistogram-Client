import React from 'react';
import ArtistogramIcon from './artistogram-icon';
import uuid from 'uuid/v4';

export function addEmptyHex(artistIcons) {
  for(let i=0; i < artistIcons.length; i++) {
    let emptyHex = <ArtistogramIcon imageUrl='' key={uuid()} />;
    if (i % 8 === 0) {
      artistIcons.splice(i, 0, emptyHex);
    }
  }
}
