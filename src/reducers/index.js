import * as actions from '../actions';
import { setLAST_FM_REQUEST_URL, setLAST_FM_ALBUM_REQUEST_URL } from '../api-request-urls'

const convert = require('xml-js');

const initialState = {
  focalArtist: 'oasis',
  user: 'lucy',
  loggedIn: false,
  artistogramArtists: []
}
export const artistogramReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SET_FOCAL_ARTIST':
      return Object.assign({}, state, {
        focalArtist: action.artist
      });
    case 'SET_USER':
      return Object.assign({}, state, {
        user: action.user.toLowerCase(),
        loggedIn: true
      });
    case 'ADD_ARTISTOGRAM_ARTISTS':
      console.log(action);
      const newArtists = action.artistogramArtists.map((artist, index) => {
        return {
         name: artist.name,
         mbid: artist.mbid,
         imageUrl: artist.image[3]["#text"],
        }
      })
      return Object.assign({}, state, {
            artistogramArtists: [...state.artistogramArtists, ...newArtists]
          });
          case 'ADD_TOP_ALBUMS':
      console.log(action.albums)
      // return Object.assign({}, state, {
      //       topAlbums: [...action.topAlbums]
      //     });
    default:
      return state;
  }
}
