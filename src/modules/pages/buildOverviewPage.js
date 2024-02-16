import { contentHolder, addContentTitle } from '../commonContentElements.js';
import {
  clearContent, getTotalAlbums, getTotalCds, getTotalTracks,
} from '../utils/utils.js';

// Build the overview page
export default function buildOverviewPage() {

  // Clear content holder
  clearContent('#main');

  // Set title of content
  contentHolder.append(addContentTitle('Overview'));

  contentHolder.innerHTML += `Total albums: ${getTotalAlbums()}<br>`;
  contentHolder.innerHTML += `Total cd's: ${getTotalCds()}<br>`;
  contentHolder.innerHTML += `Total tracks: ${getTotalTracks()}`;
}
