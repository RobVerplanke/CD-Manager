import buildOverviewPage from './modules/pages/overview.js';
import setNavListeners from './modules/navbar.js';
import { logoHolder } from './modules/commonElements.js';

// Set logo
logoHolder.innerHTML = '<h2>CDM</h2>';

// Build navigation buttons
setNavListeners();

// Load default page
buildOverviewPage();
