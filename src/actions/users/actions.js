
export const SET_USER = 'SET_USER';
export const setUser = (user) => ({
  type: SET_USER,
  username: user.username,
  savedPlaylists: user.savedPlaylists,
  savedArtistograms: user.savedArtistograms,
  loggedIn: false
})

export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const setLoggedIn = (loggedIn) => ({
  type: SET_LOGGED_IN,
  loggedIn,
})

export const SET_LOGIN_DATA = 'SET_LOGIN_DATA';
export const setLoginData = (user) => ({
  type: SET_LOGIN_DATA,
  username: user.username,
  password: user.password
})

export const CLEAR_LOGIN_DATA = 'CLEAR_LOGIN_DATA';
export const clearLoginData = () => ({
  type: CLEAR_LOGIN_DATA
})