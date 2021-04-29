import { setSavedArtistograms } from '../';
import { ApiEndpoints } from '../../libs/apiEndpoints';


export const putArtistogram = (artistogramData, history) => (dispatch, getState) => {

  const { name, imageUrl } = artistogramData;
  const data = { name, imageUrl };
  const { savedArtistograms, username } = getState();
  const inSavedArtistograms = savedArtistograms.some(artistogram => artistogram.name === name);
  const action = inSavedArtistograms ? "delete" : "add";
  
  return ApiEndpoints.artistograms(data, action, username).then(res => {
    dispatch(setSavedArtistograms(res.artistograms));
  }).then(() => {
    history.push('/dashboard');
  });
};
