import albumTest from './modules/classes/album.js';
import cdTest from './modules/classes/cd.js';
import trackTest from './modules/classes/track.js';
import { newNavButton } from './modules/navbar.js';
import { navHolder, mainSection, logoHolder } from './modules/commonElements.js';

// Set logo
logoHolder.innerHTML = '<h2>CDM</h2>';

// Load navbar buttons
navHolder.innerHTML += newNavButton('OVERVIEW');
navHolder.innerHTML += newNavButton('SEARCH');
navHolder.innerHTML += newNavButton('EDIT');


// Load content
mainSection.innerHTML = '<p>This is main section</p><br>';
mainSection.innerHTML += `<p>${albumTest()}</p><br>`;
mainSection.innerHTML += `<p>${cdTest()}</p><br>`;
mainSection.innerHTML += `<p>${trackTest()}</p><br><br>`;

