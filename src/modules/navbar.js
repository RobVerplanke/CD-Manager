import {
  buttonOverview, buttonSearch, buttonEdit, buttonAdd,
} from './commonElements.js';
import buildOverviewpage from './pages/overview.js';
import buildSearchpage from './pages/search.js';
import buildEditpage from './pages/edit.js';
import buildAddpage from './pages/add.js';

export default function setNavListeners() {
  buttonOverview.addEventListener('click', buildOverviewpage);
  buttonSearch.addEventListener('click', buildSearchpage);
  buttonEdit.addEventListener('click', buildEditpage);
  buttonAdd.addEventListener('click', buildAddpage);
}
