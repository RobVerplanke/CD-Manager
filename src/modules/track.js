import Entity from './entity.js';

export default function trackTest() {
  return 'This is track.js';
}

export class Track {
  constructor(genre, title, artist, length, info, rating) {
    this.entity = new Entity(genre, title, artist, info, rating);
    this.length = length;
  }
}
