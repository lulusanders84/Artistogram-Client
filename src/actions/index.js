import { setLAST_FM_REQUEST_URL,
  setLAST_FM_TOP_ALBUMS_REQUEST_URL,
  setAlbumRequestUrl,
  setMbRequestUrl,
  setMbAlbumsRequestUrl,
  setTracksRequestUrl,
  setTrackInfoRequestUrl } from '../api-request-urls';

let artistogramArtists;

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
      return res.json();
    })
}

function fetchFirstAlbumYear(mbid) {
  const API_URL = setMbAlbumsRequestUrl(mbid);
  return fetch(API_URL)
    .then(res => {
      return res.json();
    }).then(details => {
      if(details.releases.length > 0) {
        return details.releases[0].date;
      } else {
        return 'dateless';
      }
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
  artistogramArtists.forEach(artist => {
    if(artist.year === undefined) {
      fetchFirstAlbumYear(artist.mbid)
      .then(year => {
        artist.year = year;
      })
    }
  })
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
          acc.push({
            trackInfo
          })
      })
    })
    return acc;
  }, [])
    dispatch(addPlaylist(playlist));
}

function fetchTopTrack(artist) {
  let API_URL = setTracksRequestUrl(artist.mbid);
  return fetch(API_URL)
  .then(res => {
    return res.json();
  }).then(topTracks => {
      return topTracks.toptracks.track[0].name;
  })
}

function fetchTrackInfo(artist, track) {
  let API_URL = setTrackInfoRequestUrl(artist, track);
  return fetch(API_URL)
  .then(res => {
    return res.json();
  }).then(trackInfo => {
      return trackInfo;
    })
  }

  export const fetchAndSetFocalArtistInfo = (focalArtist) => dispatch => {
    const API_URL = setLAST_FM_REQUEST_URL("artist.getInfo", focalArtist, 1);
    fetch(API_URL)
    .then(res => {
      return res.json();
    }).then(focalArtist => {
      const artist = {
        name: focalArtist.artist.name,
        imageUrl: focalArtist.artist.image[3]["#text"],
        playlist: []
      };
      dispatch(setFocalArtist(artist));
      dispatch(setPlaylist(artist.playlist))
    })
  }

export const SET_FOCAL_ARTIST = 'SET_FOCAL_ARTIST';
export const setFocalArtist = (artist) => ({
    type: SET_FOCAL_ARTIST,
    artist
});

export const SET_USER = 'SET_USER';
export const setUser = (username) => ({
  type: SET_USER,
  user: username,
  loggedIn: false
})

export const ADD_ARTISTOGRAM_ARTISTS = 'ADD_ARTISTOGRAM_ARTISTS';
export const addArtistogramArtists = (artistogramArtists) => ({
  type: ADD_ARTISTOGRAM_ARTISTS,
  artistogramArtists,
})

export const CLEAR_ARTISTOGRAM_ARTISTS = 'CLEAR_ARTISTOGRAM_ARTISTS';
export const clearArtistogramArtists = () => ({
  type: CLEAR_ARTISTOGRAM_ARTISTS,
})

export const ADD_PLAYLIST = 'ADD_PLAYLIST';
export const addPlaylist = (playlist) => ({
  type: ADD_PLAYLIST,
  playlist,
})

export const ADD_SAVED_PLAYLIST = 'ADD_SAVED_PLAYLIST';
export const addSavedPlaylist = (playlist, title, image) => ({
  type: ADD_SAVED_PLAYLIST,
  playlist,
  title,
  image,
})
