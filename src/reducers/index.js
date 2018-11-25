import * as actions from '../actions';

const initialState = {
  focalArtist: '',
  user: ''
}
export const artistogramReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SET_FOCAL_ARTIST':
    return Object.assign({}, state, {
      focalArtist: action.artist
    });
    case 'SET_USER':
    return Object.assign({}, state, {
      user: action.user.toLowerCase()
    });
  }
}
