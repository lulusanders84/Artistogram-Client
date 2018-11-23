import React from 'react';
import ArtistIcon from './artist-icon';

export const emptyHex = <ArtistIcon imageUrl="" />;
export function addEmptyHex(artistIcons) {
  for(let i=0; i < artistIcons.length; i++) {
    if (i % 8 == 0) {
      artistIcons.splice(i, 0, emptyHex);
    }
  }
}
