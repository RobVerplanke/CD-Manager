import {
  contentHolder, clearContent, addTitle,
} from '../commonElements.js';

export default function buildEditPage() {

  // Reset content holder
  clearContent();

  // Set title of content
  contentHolder.append(addTitle('Edit or remove album, cd or track'));
}
