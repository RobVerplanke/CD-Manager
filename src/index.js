import albumTest from './modules/classes/album.js';
import cdTest from './modules/classes/cd.js';
import trackTest from './modules/classes/track.js';
// import { mainHolder } from './modules/commonElements.js';
const mainHolder = document.querySelector('#main');
const logoHolder = document.querySelector('#logo-holder');

logoHolder.innerHTML = '<h2>CDM</h2>';
mainHolder.innerHTML = '<p>This is main section</p><br>';
mainHolder.innerHTML += `<p>${albumTest()}</p><br>`;
mainHolder.innerHTML += `<p>${cdTest()}</p><br>`;
mainHolder.innerHTML += `<p>${trackTest()}</p><br><br>`;
