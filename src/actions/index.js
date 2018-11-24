export const SET_FOCAL_ARTIST = 'SET_FOCAL_ARTIST';
export const setFocalArtist = (artist) => ({
    type: SET_FOCAL_ARTIST,
    artist
});

export const SET_USER = 'SET_USER';
export const setUser = (username) => ({
  type: SET_USER,
  user: username
})
