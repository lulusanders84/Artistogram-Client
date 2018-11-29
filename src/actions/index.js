import { setLAST_FM_REQUEST_URL, setLAST_FM_TOP_ALBUMS_REQUEST_URL } from '../api-request-urls';

export const fetchSimilarArtists = (focalArtist) => dispatch => {
  let API_URL = setLAST_FM_REQUEST_URL("artist.getSimilar", focalArtist, 50, '');
  fetch(API_URL)
  .then(res => {
    if (!res.ok) {
        return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(artists => {
    artists = artists.similarartists.artist;
    return artists;
  })
  .then(artists => {
    artists = artists.map(artist => {
      return dispatch(fetchTopAlbums(artist.mbid))
      .then(topAlbums => {
        artist.topAlbum = topAlbums.topalbums.album[0].name;
        return artist;
      });
    })
    return artists;
  })
  .then(artists => {
    return Promise.all(artists).then(artists => {
      return artists;
    })
  })
  .then(artists => {
    dispatch(addArtistogramArtists(artists))
  })
}

export const fetchTopAlbums = (artist) => dispatch => {
        let API_URL = setLAST_FM_TOP_ALBUMS_REQUEST_URL(artist);
        console.log(API_URL);
        return fetch(API_URL)
        .then(res => {
          return res.json()
        }).then(data => {
          return data;
        })
      }

export const SET_FOCAL_ARTIST = 'SET_FOCAL_ARTIST';
export const setFocalArtist = (artist) => ({
    type: SET_FOCAL_ARTIST,
    artist
});

export const SET_USER = 'SET_USER';
export const setUser = (username) => ({
  type: SET_USER,
  user: username,
  loggedIn: false
})

export const ADD_ARTISTOGRAM_ARTISTS = 'ADD_ARTISTOGRAM_ARTISTS';
export const addArtistogramArtists = (artistogramArtists) => ({
  type: ADD_ARTISTOGRAM_ARTISTS,
  artistogramArtists,
})

export const ADD_YEAR_TO_ARTISTS = 'ADD_YEAR_TO_ARTISTS';
export const addYearToArtists = (artists) => ({
  type: ADD_YEAR_TO_ARTISTS,
  artists,
})

export const ADD_TOP_ALBUMS = 'ADD_TOP_ALBUMS';
export const addTopAlbums = (albums) => ({
  type: ADD_TOP_ALBUMS,
  albums,
})
