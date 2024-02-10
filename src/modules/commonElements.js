// Navigation buttons
const buttonOverview = document.querySelector('#button-overview');
const buttonSearch = document.querySelector('#button-search');
const buttonEdit = document.querySelector('#button-edit');
const buttonAdd = document.querySelector('#button-add');

// Content holder
const contentHolder = document.querySelector('#main');

function clearContent() {
  contentHolder.innerHTML = '';
}

// Create title element
function addTitle(title) {
  const titleHolder = document.createElement('div');
  titleHolder.innerHTML = `<h2>${title}</h2><br>`;

  return titleHolder;
}

// Create form element
function addForm(method) {
  const newForm = document.createElement('form');
  newForm.action = '/path';
  newForm.method = method;
  return newForm;
}

// Create label and input element in a form-group div
function addFormInput(labelTitle, type, id, required, placeHolder) {
  const formGroup = document.createElement('div');
  const label = document.createElement('label');
  const element = document.createElement(type);

  // Set attributes
  element.id = id;
  element.name = id;
  element.required = required;
  element.placeholder = placeHolder;
  label.htmlFor = id;
  label.innerHTML = `<p>${labelTitle} :</p>`;
  formGroup.classList.add('form-group');

  // Add label and input element to form-group
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
  addFormInput, addSubmitButton, addLegend, clearContent,
};
