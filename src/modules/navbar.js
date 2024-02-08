import { buttonOverview, buttonSearch, buttonEdit } from './commonElements.js';
import buildOverviewpage from './pages/overview.js';
import buildSearchpage from './pages/search.js';
import buildEditpage from './pages/edit.js';

export default function setNavListeners() {
  buttonOverview.addEventListener('click', buildOverviewpage);
  buttonSearch.addEventListener('click', buildSearchpage);
  buttonEdit.addEventListener('click', buildEditpage);
}
