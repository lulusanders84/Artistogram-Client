import { putArtistogram } from './putArtistogram';



export const cleanArtistograms = () => (dispatch, getState) => {
  const { savedArtistograms } = getState();
  const imagelessArtistograms = savedArtistograms.filter(artistogram => artistogram.imageUrl === undefined);
  console.log(imagelessArtistograms);
  imagelessArtistograms.forEach(gram => {
    dispatch(putArtistogram(gram, []));
  });
};
