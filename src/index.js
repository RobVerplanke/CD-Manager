import buildOverviewPage from './modules/pages/overview.js';
import setNavListeners from './modules/navbar.js';
import buildAddPage from './modules/pages/add.js';

// Set event listeners to buttons
setNavListeners();

// Load default page
buildAddPage();
