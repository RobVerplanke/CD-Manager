import { contentHolder } from './commonFormElements.js';

// Create title element
function addContentTitle(title) {
  const titleHolder = document.createElement('div');

  titleHolder.classList.add('content-title');
  titleHolder.innerHTML = `${title}<br>`;

  return titleHolder;
}

function addContent(title, data) {
  contentHolder.innerHTML = `<h3>${title} :</h3>${data}`;
}

export { addContentTitle, addContent };
