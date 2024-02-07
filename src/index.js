import albumTest from './modules/classes/album.js';
import cdTest from './modules/classes/cd.js';
import trackTest from './modules/classes/track.js';
// import mainSection from './modules/commonElements.js';
const mainSection = document.querySelector('#main');
// Set logo
const logoHolder = document.querySelector('#logo-holder');
logoHolder.innerHTML = '<h2>CDM</h2>';


// Load content
mainSection.innerHTML = '<p>This is main section</p><br>';
mainSection.innerHTML += `<p>${albumTest()}</p><br>`;
mainSection.innerHTML += `<p>${cdTest()}</p><br>`;
mainSection.innerHTML += `<p>${trackTest()}</p><br><br>`;
