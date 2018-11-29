import React from 'react';
import { setLAST_FM_REQUEST_URL, setMB_REQUEST_URL } from './api-request-urls';

export function getSimilarArtists(focalArtist) {
  const API_URL = setLAST_FM_REQUEST_URL(focalArtist);
  fetch(API_URL)
  .then(function(res) {
    return res.json();
  })
  .then(function(res) {
    console.log(res.similarartists.artist);
  })
}
