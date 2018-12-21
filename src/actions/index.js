import {
  setLAST_FM_REQUEST_URL,
  setMbRequestUrl,
  setTracksRequestUrl,
  setTrackInfoRequestUrl } from '../api-request-urls';

const { API_BASE_URL } = require('../config');

let artistogramArtists;

export const addNewUser = (newUser, history) => (dispatch, getState) => {
  dispatch(setLoginData(newUser));
  return fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify(newUser)
  }).then(res => {
    return res.json();
  }).then(res => {
    let error;
    if(res.location !== undefined) {
      error = res.location + " " + res.message;
      dispatch(setErrorMsg(error));
    } else {
      const username = res;
      const password = getState().loginData.password;
      let user = {username, password,};
      dispatch(loginUser(user, history));
    }
  }).then(() => {
    dispatch(clearLoginData());
  })
}

function fetchUserData(user) {
  return fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify(user)
  })
}

export const loginUser = (user, history) => (dispatch, getState) => {
  return fetchUserData(user)
  .then(res => {
    if(res.statusText === "Unauthorized") {
      dispatch(setErrorMsg("Incorrect username or password"));
      return res;
    } else {
     return res.json();
    }
 }).then(data => {
    if(data.authToken !== undefined) {
     saveAuthToken(data.authToken);
     dispatch(setUser(data.user));
     history.push(getState().destination);
   }
 })
}

function saveAuthToken(authToken){
  const authTokenStr = JSON.stringify(authToken);
  localStorage.setItem('authToken', authTokenStr);
}

function getAuthToken() {
	return JSON.parse(localStorage.getItem('authToken'));
}

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
      "Authorization": `Bearer ${getAuthToken()}`
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
 })
}

export const putSavedArtistogram = (artistogramData, history) => (dispatch, getState) => {
  const { username, name, imageUrl } = artistogramData;
  const data = {
    name,
    imageUrl,
  };
return fetch(`${API_BASE_URL}/artistograms/${username}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getAuthToken()}`
  },
  body: JSON.stringify(data)
}).then(res => {
   if (!res.ok) {
       return Promise.reject(res.statusText);
   }
   return res.json();
}).then(res => {
 dispatch(setSavedArtistograms(res.artistograms));
}).then(() => {
     history.push('/dashboard');
})
}

export const buildArtistogramArtists = (focalArtist) => dispatch => {
  fetchSimilarArtists(focalArtist)
  .then(artists => {
    return fetchOriginYear(artists);
  }).then(artists => {
    const newArtists = addYearToArtists(artists)
    return newArtists;
  }).then(artists => {
    return sortArtistsToDecades(artists);
  }).then(sortedArtists => {
    let artists = [
      ...sortedArtists["5"],
      ...sortedArtists["6"],
      ...sortedArtists["7"],
      ...sortedArtists["8"],
      ...sortedArtists["9"],
      ...sortedArtists["0"],
      ...sortedArtists["1"],
    ];

    dispatch(buildArtistogramPlaylist(artists));
    dispatch(addArtistogramArtists(sortedArtists));
  })
}

function fetchSimilarArtists(focalArtist) {
  let API_URL = setLAST_FM_REQUEST_URL("artist.getSimilar", focalArtist, 75, '');
  return fetch(API_URL)
  .then(res => {
    if (!res.ok) {
        return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(artists => {
    artists = artists.similarartists.artist;
    return artists;
  })
}

function fetchOriginYear(artists) {
    artistogramArtists = artists.map(artist => {
      if(artist.name === "Nirvana") {
        artist.mbid = '5b11f4ce-a62d-471e-81fc-a69a8278c7da';
      }
      if(artist.name === "The Charlatans") {
        artist.mbid = '8434409e-baa9-4e12-b4aa-566a91c7d7cf';
      }
      if(artist.name == "Hurricane #1") {
        artist.name = "Hurricane Number 1";
      }
      return {
        imageUrl: artist.image[3]["#text"],
        name: artist.name,
        mbid: artist.mbid,
      }
    })
    let artistStr = artists.map((artist, index) => {
      return `arid:${artist.mbid}`
    })
    artistStr = artistStr.join(' ');

    let API_URL = encodeURI(setMbRequestUrl(artistStr));
    return fetch(API_URL)
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    })
}

function addYearToArtists(artists) {
  artists = artists.artists;
  artistogramArtists = artistogramArtists.reduce((acc, item) => {
    let match = artists.find(function(artist) {
      return artist.id === item.mbid
    })
    if (match != undefined) {
      const lifespan = 'life-span'
      item.year = match[lifespan].begin;
      item.type = match.type;
      acc.push(item);
    }
    return acc;
  },[])
  return artistogramArtists;
}

function sortArtistsToDecades(artists) {
      artists = artists.map(artist => {
        if(artist.year !=undefined) {
          artist.decade = artist.year.substring(2);
        }
        return artist;
      })
      let sortedArtists = {"5":[], "6":[], "7":[], "8":[], "9":[], "0":[], "1":[]};
      artists.forEach(artist => {
        if(artist.year != undefined) {
          let decade = artist.decade.split('');
          if (artist.type === 'Person') {
            decade = parseInt(decade[0]) + 3;
            decade = decade.toString();
          }
          Object.keys(sortedArtists).forEach(key => {
            if(decade[0] == key) {
              sortedArtists[key].push(artist);
            }
          });
        }
      })
      Object.keys(sortedArtists).forEach(key => {
        sortedArtists[key].sort(function(a, b) {
          return a.decade - b.decade;
        })
      })
      return sortedArtists;
}

export const buildArtistogramPlaylist = (artists) => dispatch => {
  const playlist = artists.reduce((acc, artist) => {
    fetchTopTrack(artist)
    .then(track => {
      return fetchTrackInfo(artist.name, track)
      .then(trackInfo => {
        if(trackInfo.message !== 'Track not found') {
          acc.push({
            artist: trackInfo.track.artist.name,
            name: trackInfo.track.name,
            duration: trackInfo.track.duration
          })
        }
      })
    })
    return acc;
  }, [])
    dispatch(setPlaylist(playlist));
}

function fetchTopTrack(artist) {
  let API_URL = setTracksRequestUrl(artist.mbid);
  return fetch(API_URL)
  .then(res => {
    if (!res.ok) {
        return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(topTracks => {
      return topTracks.toptracks.track[0].name;
  })
}

function fetchTrackInfo(artist, track) {
  let API_URL = setTrackInfoRequestUrl(artist, track);
  return fetch(API_URL)
  .then(res => {
    if (!res.ok) {
        return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(trackInfo => {
      return trackInfo;
    })
  }

  export const fetchAndSetFocalArtistInfo = (focalArtist) => dispatch => {
    const API_URL = setLAST_FM_REQUEST_URL("artist.getInfo", focalArtist, 1);
    fetch(API_URL)
    .then(res => {
      if (!res.ok) {
          return Promise.reject(res.statusText);
      }
      return res.json();
    }).then(focalArtist => {
      const artist = {
        name: focalArtist.artist.name,
        imageUrl: focalArtist.artist.image[3]["#text"],
      };
      dispatch(setFocalArtist(artist));
    })
  }

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

export const ADD_ARTISTOGRAM_ARTISTS = 'ADD_ARTISTOGRAM_ARTISTS';
export const addArtistogramArtists = (artistogramArtists) => ({
  type: ADD_ARTISTOGRAM_ARTISTS,
  artistogramArtists,
})


export const SET_PLAYLIST = 'SET_PLAYLIST';
export const setPlaylist = (playlist) => ({
  type: SET_PLAYLIST,
  playlist,
})

export const SET_ERROR_MSG = 'SET_ERROR_MSG';
export const setErrorMsg = (message) => ({
  type: SET_ERROR_MSG,
  message,
})

export const SET_SAVED_PLAYLISTS = 'SET_SAVED_PLAYLISTS';
export const setSavedPlaylists = (playlists) => ({
  type: SET_SAVED_PLAYLISTS,
  playlists,
})

export const SET_SAVED_ARTISTOGRAMS = 'SET_SAVED_ARTISTOGRAMS';
export const setSavedArtistograms = (artistograms) => ({
  type: SET_SAVED_ARTISTOGRAMS,
  artistograms,
})

export const SAVE_DESTINATION = 'SAVE_DESTINATION';
export const saveDestination = (destination) => ({
  type: SAVE_DESTINATION,
  destination,
})
