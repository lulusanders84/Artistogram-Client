const client_id = "48bc0c9c264c40e3ae92c5b0719547bd";
const client_secret = "c9ea9e59b7374629a9280aee5314d942"

export const spotifyAuth = async () => {
  const refreshTime = window.localStorage.getItem("refreshTime");
  if(!refreshTime || refreshTime < Date.now()) {
   const {token, refreshInSecs} = await fetchSpotifyToken();
   storeSpotifyToken(token);
   storeSpotifyRefreshTime(refreshInSecs * 1000);
  }
}

export const fetchSpotifyToken = () => {
  return fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${(new Buffer(client_id + ':' + client_secret).toString('base64'))}`
        },
    body:
      "grant_type=client_credentials"

  }).then(res => {
    return res.json()
}).then(res => {
  return {
    token: res.access_token,
    refreshInSecs: res.expires_in
  };
})
}

export const fetchSpotifyArtistIdAndImage = (token, artist) => {
  return fetch(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }).then(res => {
    return res.json()
  }).then(res => {
    const artistItem = res.artists.items[0]
    return artistItem
      ? { 
          image: artistItem.images[0],
          id: artistItem.id
        }
      : null
  })
}

const fetchAndReturnJson = (url, parameters) => {
  return fetch(url, parameters).then(res => {
    return res.json();
  })
}
export const fetchSpotifyTopTracks = (token, artist) => {
  return fetchAndReturnJson(`https://api.spotify.com/v1/artists/${artist.id}/top-tracks?country=US`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }).then(res => {
    const track = res.tracks[0];
    const year = getYear(res.tracks).toString();
    artist.year = year;
    artist.topTrack = getTopTrackInfo(track, year);
    return artist;
  })
}

const getYear = (tracks) => {
  return tracks.reduce((acc, track) => {
    const year = parseInt(track.album.release_date.substring(0, 4));
    acc = year < acc ? year : acc;
    return acc;
  }, 3000);
}
const getTopTrackInfo = (track, year) => {
  const { name: title, duration_ms: duration, id } = track;
  return {
    title,
    duration,
    year,
    id,
  }
}

const spotifySwitch = (res, itemRequested) => {
  switch(itemRequested) {
    case "image":
      return res.artists.items[0] ? res.artists.items[0].images[0] : null;
    default:
      return "Item type not found"
  }
}

export const storeSpotifyToken = (token) => {
  window.localStorage.setItem("token", token);
}

export const getSpotifyToken = () => {
  return window.localStorage.getItem("token");

}

export const storeSpotifyRefreshTime = (refreshIn) => {
  const dateNow = Date.now();
  const date = new Date(dateNow + refreshIn)
  console.log(date)
  window.localStorage.setItem("refreshTime", Date.now() + refreshIn);
}
