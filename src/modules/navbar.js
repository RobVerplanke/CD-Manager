import {
  buttonOverview, buttonSearch, buttonEdit, buttonAdd,
} from './commonElements.js';
import buildFormPage from './pages/buildFormPages.js';
import buildOverviewPage from './pages/overview.js';

export default function setNavListeners() {
  buttonOverview.addEventListener('click', buildOverviewPage);
  buttonSearch.addEventListener('click', buildFormPage('track', 'get', 'Search'));
  buttonEdit.addEventListener('click', buildFormPage('album', 'get', 'Edit'));
  buttonAdd.addEventListener('click', buildFormPage('track', 'post', 'Add'));

}
