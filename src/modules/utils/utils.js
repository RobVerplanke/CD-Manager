import { data } from './api.js';

// Get total amount of albums in database
export function getTotalAlbums() {
  return data.albums.length;
}

// Get total amount of CDs in database
export function getTotalCds() {
  return data.cds.length;
}

// Get total amount of tracks in database
export function getTotalTracks() {
  return data.tracks.length;
}


// Clear section
export function clearContent(section) {
  const formHolder = document.querySelector(section);
  formHolder.innerHTML = '';
}
