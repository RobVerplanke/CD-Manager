// import data from '../utils/api.js';

export function addItem() {
  console.log('submitted!');
}

export function setAddSubmitListener(button) {
  const submitButton = button;

  submitButton.addEventListener('click', addItem);
}
