import Entity from './entity.js';

export default function cdTest() {
  return 'This is cd.js';
}

export class CD {
  constructor(genre, title, artist, date, label, items, info, rating) {
    this.entity = new Entity(genre, title, artist, info, rating);
    this.date = date;
    this.label = label;
    this.items = items;

  }
}
