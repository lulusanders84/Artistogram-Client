export const SET_PLAYLIST = 'SET_PLAYLIST';
export const setPlaylist = (playlist) => ({
  type: SET_PLAYLIST,
  playlist,
})

export const SET_SAVED_PLAYLISTS = 'SET_SAVED_PLAYLISTS';
export const setSavedPlaylists = (playlists) => ({
  type: SET_SAVED_PLAYLISTS,
  playlists,
})
