import { Spotify } from '../../libs/spotify';
import { setArtistFromSpotify, setFocalArtist, setLoading} from '../';



export const fetchAndSetFocalArtistInfo = (focalArtist) => async (dispatch) => {
  const token = await Spotify.getToken(dispatch, setLoading);
  const artist = await setArtistFromSpotify(token, focalArtist);
  dispatch(setFocalArtist(artist));
};
