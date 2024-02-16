// Content holder
const contentHolder = document.querySelector('#main');

// Create title element
function addContentTitle(title) {
  const titleHolder = document.createElement('div');

  titleHolder.classList.add('content-title');
  titleHolder.innerHTML = `${title}<br>`;

  return titleHolder;
}

// Create content section
function addContent(title, data) {
  contentHolder.innerHTML = `<h3>${title} :</h3>${data}`;
}

export { contentHolder, addContentTitle, addContent };
