

export function sortArtistsToDecades(artists) {
  artists = artists.map(artist => {
    if (artist !== undefined) {
      artist.decade = artist.year.substring(2);
    }
    return artist;
  });
  let sortedArtists = { "5": [], "6": [], "7": [], "8": [], "9": [], "0": [], "1": [] };
  artists.forEach(artist => {
    if (artist !== undefined) {
      let decade = artist.decade.split('');
      if (artist.type === 'Person') {
        decade = parseInt(decade[0]) + 3;
        decade = decade.toString();
      }
      Object.keys(sortedArtists).forEach(key => {
        if (decade[0] === key) {
          sortedArtists[key].push(artist);
        }
      });
    }
  });
  Object.keys(sortedArtists).forEach(key => {
    sortedArtists[key].sort(function (a, b) {
      return a.decade - b.decade;
    });
  });
  return sortedArtists;
}
