import * as actions from '../actions';

const initialState = {
  focalArtist: ''
}
export const artistogramReducer = (state=initialState, action) => {
  console.log(action);
  switch(action.type) {
    case 'SET_FOCAL_ARTIST':
    console.log(action);
    return Object.assign({}, state, {
      focalArtist: action.artist
    });
  }
}
