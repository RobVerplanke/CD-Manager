import Entity from './entity.js';

export default function cdTest() {
  return 'This is cd.js';
}

export class CD {
  constructor(genre, title, artist, collaborators, date, label, items, info, rating) {
    this.entity = new Entity(genre, title, artist, collaborators, info, rating);
    this.date = date;
    this.label = label;
    this.items = items;

  }
}
