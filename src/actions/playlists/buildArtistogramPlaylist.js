
export const buildArtistogramPlaylist = (artists) => {
  return artists.map(artistObj => {
    const { name: artist, topTrack, year } = artistObj;
    const { title: name, duration } = topTrack;
    return {
      artist,
      name,
      duration,
      year,
    };
  });
};
