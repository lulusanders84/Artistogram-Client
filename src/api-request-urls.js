
import { LAST_FM_API_KEY } from './config';

const LAST_FM_URL = "https://ws.audioscrobbler.com/2.0/?";

export function setLAST_FM_REQUEST_URL(method, artist, limit) {
  return `${LAST_FM_URL}method=${method}&artist=${artist}&api_key=${LAST_FM_API_KEY}&format=json&limit=${limit}`;
}

export function setTracksRequestUrl(mbid) {
  return `${LAST_FM_URL}method=artist.getTopTracks&mbid=${mbid}&api_key=${LAST_FM_API_KEY}&format=json&limit=1`;
}

export function setTrackInfoRequestUrl(artist, track) {
  return `${LAST_FM_URL}method=track.getInfo&artist=${artist}&track=${track}&api_key=${LAST_FM_API_KEY}&format=json`;
}

export function setMbRequestUrl(artists) {
  return `https://musicbrainz.org/ws/2/artist/?query=${artists}&fmt=json&limit=100`;
}
