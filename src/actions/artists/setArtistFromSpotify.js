import { Spotify } from '../../libs/spotify';



export const setArtistFromSpotify = async (token, artist) => {
  return Spotify.fetchArtistIdAndImage(token, encodeURI(artist)).then(res => {
    if (res) {
      const { image, id } = res;
      return {
        name: artist,
        imageUrl: image ? image.url : "",
        id,
      };
    } else
      return null;
  });

};
