import buildOverviewpage from './pages/overview.js';
import buildSearchpage from './pages/search.js';
import buildEditpage from './pages/edit.js';

export default function setNavListeners() {
  const buttonOverview = document.querySelector('#button-overview');
  const buttonSearch = document.querySelector('#button-search');
  const buttonEdit = document.querySelector('#button-edit');

  buttonOverview.addEventListener('click', buildOverviewpage);
  buttonSearch.addEventListener('click', buildSearchpage);
  buttonEdit.addEventListener('click', buildEditpage);
}
