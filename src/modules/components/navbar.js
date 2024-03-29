import {
  buttonOverview, buttonSearch, buttonAddAlbum, buttonAddCD,
  buttonAddTrack,
} from '../commonFormElements.js';
import buildFormPage from '../pages/buildFormPages.js';
import buildOverviewPage from '../pages/buildOverviewPage.js';

// Set event listeners
export default function setNavListeners() {
  buttonOverview.addEventListener('click', buildOverviewPage);
  buttonSearch.addEventListener('click', buildFormPage('get', 'Search', ''));
  buttonAddAlbum.addEventListener('click', buildFormPage('post', 'Add', 'album'));
  buttonAddCD.addEventListener('click', buildFormPage('post', 'Add', 'cd'));
  buttonAddTrack.addEventListener('click', buildFormPage('post', 'Add', 'track'));
}
