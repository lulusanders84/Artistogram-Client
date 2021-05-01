import { Spotify } from '../../libs/spotify';
import { 
  buildArtistogramPlaylist,
  fetchSimilarArtists, 
  setArtistFromSpotify,
  setLoading, 
  setPlaylist,
  sortArtistsToDecades, 
  addArtistogramArtists } from '../';
import { timeout } from '../../libs/timeout';



export const buildArtistogramArtists = (focalArtist) => async (dispatch) => {
  dispatch(setLoading(true))
  await timeout(3000)
  const token = await Spotify.getToken(dispatch, setLoading);
  fetchSimilarArtists(focalArtist)
    .then(artists => {
      return Promise.all(artists.map(artist => {
        if (artist.name === "Hurricane #1") {
          artist.name = "Hurricane Number 1";
        }
        return setArtistFromSpotify(token, artist.name).then(res => {
          return res;
        });

      }));
    }).then(artists => {
      artists = artists.reduce((acc, artist) => {
        if (artist) {
          acc.push(artist);
        }
        return acc;
      }, []);
      return Promise.all(artists.map(artist => {
        return Spotify.fetchTopTracks(token, artist);
      })).then(artists => {
        return sortArtistsToDecades(artists);
      }).then(sortedArtists => {
        dispatch(addArtistogramArtists(sortedArtists));
        let artists = [
          ...sortedArtists["5"],
          ...sortedArtists["6"],
          ...sortedArtists["7"],
          ...sortedArtists["8"],
          ...sortedArtists["9"],
          ...sortedArtists["0"],
          ...sortedArtists["1"],
        ];
        return buildArtistogramPlaylist(artists);
      }).then(playlist => {
        dispatch(setPlaylist(playlist));
      });
    });
};
