import * as actions from '../actions';

const initialState = {
  focalArtist: 'oasis',
  user: 'lucy',
  loggedIn: false
}
export const artistogramReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SET_FOCAL_ARTIST':
    return Object.assign({}, state, {
      focalArtist: action.artist,
      user: state.user,
      loggedIn: state.loggedIn
    });
    case 'SET_USER':
    return Object.assign({}, state, {
      user: action.user.toLowerCase(),
      loggedIn: true
    });
    default:
    return state;
  }
}
