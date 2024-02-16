import { contentHolder, addContentTitle } from '../commonContentElements.js';
import {
  clearContent, getTotalAlbums, getTotalCds, getTotalTracks,
} from '../utils/utils.js';

export default function buildOverviewPage() {

  // Reset content holder
  clearContent();

  // Set title of content
  contentHolder.append(addContentTitle('Overview'));

  contentHolder.innerHTML += `Total albums: ${getTotalAlbums()}<br>`;
  contentHolder.innerHTML += `Total cd's: ${getTotalCds()}<br>`;
  contentHolder.innerHTML += `Total tracks: ${getTotalTracks()}`;
}
