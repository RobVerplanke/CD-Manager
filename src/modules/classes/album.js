import Entity from './entity.js';

export default function albumTest() {
  return 'This is album.js';
}

export class Album {
  constructor(genre, title, artist, collaborators, date, label, items, info, rating) {
    this.entity = new Entity(genre, title, artist, collaborators, info, rating);
    this.date = date;
    this.label = label;
    this.items = items;
  }
}
