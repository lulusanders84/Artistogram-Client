import * as actions from '../actions';
import { setLAST_FM_REQUEST_URL, setLAST_FM_ALBUM_REQUEST_URL } from '../api-request-urls'

const convert = require('xml-js');

const initialState = {
  focalArtist: 'oasis',
  user: 'lucy',
  loggedIn: false,
  fifties: [],
  sixties: [],
  seventies: [],
  eighties: [],
  ninties: [],
  aughts: [],
  tens: [],
  playlist:[{trackinfo: {track: {artist: {name: 'oasis'}, name: 'Wonderwall', duration: 120000}}}]
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
      const newArtists = action.artistogramArtists;
      return Object.assign({}, state, {
            fifties: [...newArtists[5]],
            sixties: [...newArtists[6]],
            seventies: [...newArtists[7]],
            eighties: [...newArtists[8]],
            ninties: [...newArtists[9]],
            aughts: [...newArtists[0]],
            tens: [...newArtists[1]],

          });
    case 'CLEAR_ARTISTOGRAM_ARTISTS':
      return Object.assign({}, state, {

      })
    case 'ADD_PLAYLIST':
      console.log('added playlist', action.playlist);
      return Object.assign({}, state, {
        playlist: action.playlist
      });
    default:
      return state;
  }
}
