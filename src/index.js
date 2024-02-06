import albumTest from './modules/album.js';
import cdTest from './modules/cd.js';
import trackTest from './modules/track.js';

const logoHolder = document.querySelector('#header-logo-holder');
const mainHolder = document.querySelector('#main-holder');

logoHolder.innerHTML = '<h2>CDM</h2>';
mainHolder.innerHTML = '<h2>This is main section</h2><br>';
mainHolder.innerHTML += `<h3>${albumTest()}</h3><br>`;
mainHolder.innerHTML += `<h3>${cdTest()}</h3><br>`;
mainHolder.innerHTML += `<h3>${trackTest()}</h3><br><br>`;
