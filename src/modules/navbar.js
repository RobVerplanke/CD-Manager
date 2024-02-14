import {
  buttonOverview, buttonSearch, buttonEdit, buttonAddAlbum, buttonAddCD,
  buttonAddTrack,
} from './commonElements.js';
import buildFormPage from './pages/buildFormPages.js';
import buildOverviewPage from './pages/overview.js';

export default function setNavListeners() {
  buttonOverview.addEventListener('click', buildOverviewPage);
  buttonSearch.addEventListener('click', buildFormPage('get', 'Search', ''));
  buttonEdit.addEventListener('click', buildFormPage('get', 'Edit', ''));
  buttonAddAlbum.addEventListener('click', buildFormPage('post', 'Add', 'album'));
  buttonAddCD.addEventListener('click', buildFormPage('post', 'Add', 'cd'));
  buttonAddTrack.addEventListener('click', buildFormPage('post', 'Add', 'track'));
}
