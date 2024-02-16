import data from './api.js';

export function getTotalAlbums() {
  return data.data.albums.length;
}

export function getTotalCds() {
  return data.data.cds.length;
}

export function getTotalTracks() {
  return data.data.tracks.length;
}
