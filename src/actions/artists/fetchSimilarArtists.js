import { setLAST_FM_REQUEST_URL } from '../../api-request-urls';



export function fetchSimilarArtists(focalArtist) {
  let API_URL = setLAST_FM_REQUEST_URL("artist.getSimilar", focalArtist, 75, '');
  return fetch(API_URL)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(artists => {
      artists = artists.similarartists.artist;
      return artists;
    });
}
