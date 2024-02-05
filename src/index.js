import albumTest from './modules/album.js';
import cdTest from './modules/cd.js';
import trackTest from './modules/track.js';

const headerHolder = document.querySelector('#header-holder');
const mainHolder = document.querySelector('#main-holder');
const footerHolder = document.querySelector('#footer-holder');

headerHolder.innerHTML = '<h2>This is nav</h2><br><br>';
mainHolder.innerHTML = '<h2>This is main section</h2><br>';
mainHolder.innerHTML += `<h3>${albumTest()}</h3><br>`;
mainHolder.innerHTML += `<h3>${cdTest()}</h3><br>`;
mainHolder.innerHTML += `<h3>${trackTest()}</h3><br><br>`;
footerHolder.innerHTML = '<h2>This is footer</h2>';
