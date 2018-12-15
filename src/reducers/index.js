import * as actions from '../actions';
import { setLAST_FM_REQUEST_URL, setLAST_FM_ALBUM_REQUEST_URL } from '../api-request-urls'

const initialState = {
  focalArtist: {name: "oasis"},
  username: 'lucy',
  loginData: {},
  loggedIn: false,
  fifties: [],
  sixties: [],
  seventies: [],
  eighties: [],
  ninties: [],
  aughts: [],
  tens: [],
  playlist:[{track: {artist: {name: 'oasis'}, name: 'Wonderwall', duration: 120000}}],
  savedPlaylists: [
    {
      name: "Oasis P",
      imageUrl: "https://i.pinimg.com/236x/d9/db/c6/d9dbc673354e24e582bd59654a5bd1ce--oasis-band-mod-hair.jpg",
      playlist: [{track: {artist: {name: 'oasis'}, name: 'Wonderwall', duration: 120000}}]
    },
    {
      name: "Coldplay P",
      imageUrl: "https://consequenceofsound.files.wordpress.com/2015/02/coldplay.jpg?quality=80&w=400&h=400&crop=1",
      createDate: "11/08/18"
    },
    {
      name: "Travis P",
      imageUrl: "https://i.pinimg.com/originals/40/9b/55/409b551b323e30965e8385abd78aba31.jpg",
      createDate: "10/15/18"
    },
    {
      name: "Johnny Cash P",
      imageUrl: "https://www.abc.net.au/news/image/9639832-3x2-700x467.jpg",
      createDate: "11/01/18"
    }
  ],
  savedArtistograms: [      {
          name: "Oasis",
          imageUrl: "https://i.pinimg.com/236x/d9/db/c6/d9dbc673354e24e582bd59654a5bd1ce--oasis-band-mod-hair.jpg",
          createDate: "11/15/18"
        },
        {
          name: "Coldplay",
          imageUrl: "https://consequenceofsound.files.wordpress.com/2015/02/coldplay.jpg?quality=80&w=400&h=400&crop=1",
          createDate: "11/08/18"
        },
        {
          name: "Travis",
          imageUrl: "https://i.pinimg.com/originals/40/9b/55/409b551b323e30965e8385abd78aba31.jpg",
          createDate: "10/15/18"
        },
        {
          name: "Johnny Cash",
          imageUrl: "https://www.abc.net.au/news/image/9639832-3x2-700x467.jpg",
          createDate: "11/01/18"
        }
       ],
}
export const artistogramReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SET_FOCAL_ARTIST':
      console.log(action);
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
      console.log('added playlist', action.playlist);
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
    default:
      return state;
  }
}
