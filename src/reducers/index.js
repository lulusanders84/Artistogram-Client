// import * as actions from '../actions';
import { setLAST_FM_REQUEST_URL, setLAST_FM_ALBUM_REQUEST_URL } from '../api-request-urls'

const initialState = {
  focalArtist: {},
  username: '',
  loginData: {},
  loggedIn: false,
  fifties: [],
  sixties: [],
  seventies: [],
  eighties: [],
  ninties: [],
  aughts: [],
  tens: [],
  playlist:[],
  savedPlaylists: [],
  savedArtistograms: [],
  destination: '/dashboard',
  errorMsg: ''
}
export const artistogramReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SET_FOCAL_ARTIST':
      return Object.assign({}, state, {
        focalArtist: {
          name: action.name,
          imageUrl: action.imageUrl
        }
      });
    case 'SET_FOCAL_ARTIST_NAME':
      return Object.assign({}, state, {
        focalArtist: {
          name: action.name
        }
      });
    case 'SET_USER':
      return Object.assign({}, state, {
        username: action.username,
        savedPlaylists: action.savedPlaylists,
        savedArtistograms: action.savedArtistograms,
        loggedIn: true
      });
    case 'SET_LOGIN_DATA':
      return Object.assign({}, state, {
        loginData: {
          username: action.username,
          password: action.password
        }
      });
    case 'CLEAR_LOGIN_DATA':
      return Object.assign({}, state, {
        loginData: {}
      });
      case 'SET_ERROR_MSG':
        return Object.assign({}, state, {
          errorMsg: action.message
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
    case 'SET_PLAYLIST':
      return Object.assign({}, state, {
        playlist: action.playlist
      });
    case 'SET_SAVED_PLAYLISTS':
      return Object.assign({}, state, {
        savedPlaylists: action.playlists
      });
    case 'SET_SAVED_ARTISTOGRAMS':
      return Object.assign({}, state, {
        savedArtistograms: action.artistograms
      });
    case 'SAVE_DESTINATION':
    return Object.assign({}, state, {
      destination: action.destination
    });
    default:
      return state;
  }
}
