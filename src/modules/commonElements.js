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

// Create label and 'text' input element
function addFormInput(title, type, id, required) {
  const formGroup = document.createElement('div');
  const label = document.createElement('label');
  const element = document.createElement(type);

  // Set attributes
  element.id = id;
  element.required = required;
  label.innerHTML = `<p>${title} :</p>`;
  formGroup.classList.add('form-group');

  // Add label and input element to form group
  formGroup.append(label, element);

  return formGroup;
}

// Create label and 'select' input element
function addFormInputSelect(title, id, required) {
  const formGroup = document.createElement('div');
  const label = document.createElement('label');
  const element = document.createElement('select');

  // Set attributes
  label.htmlFor = id;
  element.id = id;
  element.required = required;
  label.innerHTML = `<p>${title} :</p>`;
  formGroup.classList.add('form-group');

  // Add label and input element to form group
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
  addFormInput, addSubmitButton, addLegend, addFormInputSelect,
};
