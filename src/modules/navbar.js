import { navHolder, logoHolder } from './commonElements.js';

// Set logo
logoHolder.innerHTML = '<h2>CDM</h2>';

// Buttons in navigation bar
const buttonTitles = ['OVERVIEW', 'SEARCH', 'EDIT'];

// Create new button
function newNavButton(value) {
  return `<div class ="nav-button"><p>${value}</p></div>`;
}

// Create a button for each item in buttons list
export default function buildNavbar() {
  buttonTitles.forEach((title) => {
    navHolder.innerHTML += newNavButton(title);
  });
}

