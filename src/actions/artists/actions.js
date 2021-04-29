export const SET_FOCAL_ARTIST = 'SET_FOCAL_ARTIST';
export const setFocalArtist = (artist) => ({
    type: SET_FOCAL_ARTIST,
    name: artist.name,
    imageUrl: artist.imageUrl,
});

export const SET_FOCAL_ARTIST_NAME = 'SET_FOCAL_ARTIST_NAME';
export const setFocalArtistName = (artist) => ({
    type: SET_FOCAL_ARTIST_NAME,
    name: artist,
});

export const ADD_ARTISTOGRAM_ARTISTS = 'ADD_ARTISTOGRAM_ARTISTS';
export const addArtistogramArtists = (artistogramArtists) => ({
  type: ADD_ARTISTOGRAM_ARTISTS,
  artistogramArtists,
})


