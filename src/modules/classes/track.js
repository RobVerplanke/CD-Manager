import Entity from './entity.js';

export default function trackTest() {
  return 'This is track.js';
}

export class Track {
  constructor(genre, title, artist, collaborators, length, info, rating) {
    this.entity = new Entity(genre, title, artist, collaborators, info, rating);
    this.length = length;
  }
}
