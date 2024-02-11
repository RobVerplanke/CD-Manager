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
  // newForm.action = 'https://httpbin.org/post';
  newForm.action = '';

  newForm.method = method;
  return newForm;
}

// Create label and input element in a form-group div
function addFormInput(labelTitle, type, id, required, placeHolder = '') {
  const formGroup = document.createElement('div');
  const label = document.createElement('label');
  const element = document.createElement(type);

  if (type === 'input') element.type = 'text';

  // Create options for selection elements
  if (type === 'select') {
    switch (labelTitle) {

    // 1900-current year
    case 'Year': {
      const currentYear = new Date().getFullYear();
      for (let i = currentYear; i > 1899; i--) {
        // console.log(i);
        const option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        element.append(option);
      }
    }
      break;

    // CDs: 1-4 or more
    case 'CDs': {
      for (let i = 0; i < 4; i++) {
        const option = document.createElement('option');
        option.value = i + 1;
        option.innerText = i + 1;
        element.append(option);
      }

      // Add extra option
      const option5 = document.createElement('option');
      option5.value = '5-or-more';
      option5.innerText = '5+';
      element.append(option5);
    }
      break;

    // Rating: 1-5
    case 'Rating':
      for (let i = 0; i < 5; i++) {
        const option = document.createElement('option');
        option.innerText = '\u2605'.repeat(i + 1);
        element.append(option);
      }

      break;

    // Album names
    case 'Album': {

      // Add extra option, set as default
      const defaultOption = document.createElement('option');
      defaultOption.value = 'none';
      defaultOption.innerText = '(none)';
      element.selectedIndex = 1;
      element.append(defaultOption);

      // Add album titles to option list
      for (let i = 0; i < 5; i++) {
        const option = document.createElement('option');
        option.innerText = i + 1;
        element.append(option);
      }


      break;
    }


    default:

      break;
    }
  }

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
function addSubmitButton(value) {
  const button = document.createElement('button');
  button.type = 'submit';
  button.innerHTML = value;

  return button;
}


export {
  buttonOverview, buttonSearch, buttonEdit, buttonAdd, contentHolder, addTitle, addForm,
  addFormInput, addSubmitButton, addLegend, clearContent,
};
