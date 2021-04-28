import { fetchAndReturnJson } from "./fetchAndReturnJson";
import { getTopTrackInfo } from "./getTopTrackInfo";
import { getYear } from "./getYear";
const client_id = "48bc0c9c264c40e3ae92c5b0719547bd";
const client_secret = "c9ea9e59b7374629a9280aee5314d942"

export class Spotify {

  static auth = async () => {
    console.log("spotify authing...")
    const {token, refreshInSecs} = await Spotify.fetchToken();
    window.localStorage.setItem("spotifyToken", token)
    window.localStorage.setItem("refreshTime", Date.now() + refreshInSecs * 1000);
  }

  static isAuthRequired = () => {
    const storedToken = window.localStorage.getItem("token")
    const refreshTime = window.localStorage.getItem("refreshTime")
    return !storedToken || !refreshTime || refreshTime < Date.now()
  }

  static fetchTopTracks = (token, artist) => {
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

  static fetchToken = () => {
    return fetchAndReturnJson(`https://accounts.spotify.com/api/token`, {
      method: "POST",
      headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              "Authorization": `Basic ${btoa(client_id + ':' + client_secret)}`
          },
      body:
        "grant_type=client_credentials"

    }).then(res => {
    return {
      token: res.access_token,
      refreshInSecs: res.expires_in
    };
  })
  }

  static fetchArtistIdAndImage = (token, artist) => {
    return fetchAndReturnJson(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
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

  static getToken = (dispatch, setLoading) => {
    dispatch(setLoading(true))
    return Spotify.isAuthRequired()
    ? Spotify.auth().then(() => {
      return window.localStorage.getItem("spotifyToken")
    })
    : window.localStorage.getItem("spotifyToken")
  }

  static storeRefreshTime = (refreshIn) => {
    window.localStorage.setItem("refreshTime", Date.now() + refreshIn);

}
}
