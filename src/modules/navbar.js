import {
  buttonOverview, buttonSearch, buttonEdit, buttonAdd,
} from './commonElements.js';
import buildOverviewPage from './pages/overview.js';
import { buildSearchAlbumPage, buildSearchCDPage, buildSearchTrackPage } from './pages/search.js';
import { buildEditAlbumPage, buildEditCDPage, buildEditTrackPage } from './pages/edit.js';
import { buildAddAlbumPage, buildAddCDPage, buildAddTrackPage } from './pages/add.js';

export default function setNavListeners() {
  buttonOverview.addEventListener('click', buildOverviewPage);
  buttonSearch.addEventListener('click', buildSearchTrackPage);
  buttonEdit.addEventListener('click', buildEditTrackPage);
  buttonAdd.addEventListener('click', buildAddAlbumPage);
  // buttonAdd.addEventListener('click', buildAddCDPage);
  // buttonAdd.addEventListener('click', buildAddTrackPage);

}
