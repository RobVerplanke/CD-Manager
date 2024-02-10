import {
  contentHolder, clearContent, addTitle,
} from '../commonElements.js';

export default function buildSearchPage() {

  // Reset content holder
  clearContent();

  // Set title of content
  contentHolder.append(addTitle('Search for album, cd or track'));
}
