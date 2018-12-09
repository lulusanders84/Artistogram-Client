import * as actions from '../actions';
import { setLAST_FM_REQUEST_URL, setLAST_FM_ALBUM_REQUEST_URL } from '../api-request-urls'

const convert = require('xml-js');

const initialState = {
  focalArtist: {name: "oasis"},
  user: 'lucy',
  loggedIn: false,
  fifties: [],
  sixties: [],
  seventies: [],
  eighties: [],
  ninties: [],
  aughts: [],
  tens: [],
  playlist:[{trackInfo: {track: {artist: {name: 'oasis'}, name: 'Wonderwall', duration: 120000}}}],
  savedPlaylists: [
    {
      name: "Oasis P",
      imageUrl: "https://i.pinimg.com/236x/d9/db/c6/d9dbc673354e24e582bd59654a5bd1ce--oasis-band-mod-hair.jpg",
      createDate: "11/15/18"
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
    case 'ADD_SAVED_PLAYLIST':
      const newPlaylist = {
        name: action.title,
        imageUrl: action.image,
        playlist: action.playlist
      }
      return Object.assign({}, state, {
        savedPlaylists: [...state.savedPlaylists, newPlaylist]
      });
    default:
      return state;
  }
}
