export const getYear = (tracks) => {
  return tracks.reduce((acc, track) => {
    const year = parseInt(track.album.release_date.substring(0, 4));
    acc = year < acc ? year : acc;
    return acc;
  }, 3000);
};
