// Buttons
const buttonOverview = document.querySelector('#button-overview');
const buttonSearch = document.querySelector('#button-search');
const buttonEdit = document.querySelector('#button-edit');
const buttonAdd = document.querySelector('#button-add');

// Content holder
const contentHolder = document.querySelector('#main');

// Create title element
function addTitle(title) {
  const titleHolder = document.createElement('div');
  titleHolder.append(title);
  return titleHolder;
}

// Create form element
function addForm() {
  const titleHolder = document.createElement('form');

  return titleHolder;
}

// Create label with text input elements
function addFormInput(title, type, required) {
  const formGroup = document.createElement('div');
  const label = document.createElement('label');
  const element = document.createElement(type);

  // Set input requirement
  element.required = required;

  // Set elements
  formGroup.classList.add('form-group');
  label.innerHTML = `<p>${title} :</p>`;

  formGroup.append(label, element);

  return formGroup;
}

// Create legend
function addLegend(value) {
  const formGroup = document.createElement('div');
  formGroup.classList.add('form-group');
  formGroup.innerHTML = `<h6>${value}</h6>`;
  return formGroup;

}

// Create form submit button
function addSubmitButton() {
  const button = document.createElement('button');
  button.type = 'submit';
  button.innerHTML = 'Add';

  return button;
}


export {
  buttonOverview, buttonSearch, buttonEdit, buttonAdd, contentHolder, addTitle, addForm,
  addFormInput, addSubmitButton, addLegend,
};
