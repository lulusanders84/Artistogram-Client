import { AuthToken } from '../../libs/authToken';
import { setSavedPlaylists } from '../';
const { API_BASE_URL } = require('../../config');


export const putSavedPlaylist = (playlistData, history) => (dispatch, getState) => {
  const { username, playlist, name, imageUrl } = playlistData;
  const data = {
    name,
    imageUrl,
    playlist,
  };
  return fetch(`${API_BASE_URL}/playlists/${username}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${AuthToken.get()}`
    },
    body: JSON.stringify(data)
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(res => {
    dispatch(setSavedPlaylists(res.playlists));
  }).then(() => {
    history.push('/dashboard');
  });
};
