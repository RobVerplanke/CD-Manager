// Navigation buttons
const buttonOverview = document.querySelector('#button-overview');
const buttonSearch = document.querySelector('#button-search');
const buttonAddAlbum = document.querySelector('#drop-add-album');
const buttonAddCD = document.querySelector('#drop-add-cd');
const buttonAddTrack = document.querySelector('#drop-add-track');

// Content holder
const contentHolder = document.querySelector('#main');

function clearContent() {
  contentHolder.innerHTML = '';
}

// Create title element
function addFormTitle(title) {
  const titleHolder = document.createElement('div');

  titleHolder.classList.add('content-title');
  titleHolder.innerHTML = `${title}<br>`;

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

// Set label element attributes
function setLabelElement(element, htmlFor, innerText) {
  const label = element;

  label.htmlFor = htmlFor;
  label.innerHTML = innerText;
}

// Set input element attributes
function setInputElement(element, id, req, placeholder) {
  const input = element;

  input.id = id;
  input.name = id;
  input.required = req;
  input.placeholder = placeholder;
}

// Create label and input element in a form-group div
function addFormInput(elementList) {
  const form = document.createElement('div');

  // Itterate through list of elements
  elementList.forEach((field) => {
    const formGroup = document.createElement('div');
    const labelElelemt = document.createElement('label');
    const inputElement = document.createElement(`${field.type}`);

    // Set element values and properties
    formGroup.classList.add('form-group');
    setLabelElement(labelElelemt, `${field.id}`, `<p>${field.label} :</p>`);
    setInputElement(inputElement, field.id, field.required, field.placeHolder);

    // Use textfield as default input element
    if (field.type === 'input') inputElement.type = 'text';

    // Use number element for amounts
    if (field.id === 'tracks' || field.id === 'discs') {
      inputElement.type = 'number';
      inputElement.maxlength = '2';
    }

    // Set options for select elements
    if (field.type === 'select') {
      let defaultOption = '';

      switch (field.label) {

      // 1900-current year
      case 'Year': {
        const currentYear = new Date().getFullYear();

        for (let i = currentYear; i > 1899; i--) {
          // console.log(i);
          const option = document.createElement('option');
          option.value = i;
          option.innerText = i;
          inputElement.append(option);
        }
      }
        break;

        // CDs: 1-4 or more
      case 'CDs': {
        for (let i = 0; i < 4; i++) {
          const option = document.createElement('option');

          option.value = i + 1;
          option.innerText = i + 1;
          inputElement.append(option);
        }

        // Add extra option
        const option5 = document.createElement('option');

        option5.value = '5-or-more';
        option5.innerText = '5+';
        inputElement.append(option5);
      }
        break;

        // Rating: 1-5 stars
      case 'Rating':

        // Add neutral (node) option, set as default
        defaultOption = document.createElement('option');

        // defaultOption.value = 'none';
        defaultOption.innerText = '(none)';
        inputElement.selectedIndex = 1;
        inputElement.append(defaultOption);

        for (let i = 0; i < 5; i++) {
          const option = document.createElement('option');

          option.value = i + 1;
          option.innerText = '\u2605'.repeat(i + 1);
          inputElement.append(option);
        }
        break;

        // Choose from all album titels
      case 'Album': {

        // Add neutral (node) option, set as default
        defaultOption = document.createElement('option');
        defaultOption.value = 'none';
        defaultOption.innerText = '(none)';
        inputElement.selectedIndex = 1;
        inputElement.append(defaultOption);

        // Add album titles to option list
        for (let i = 0; i < 5; i++) {
          const option = document.createElement('option');

          option.innerText = i + 1;
          inputElement.append(option);
        }
        break;
      }
      default:
        break;
      }
    }

    // Group label and element, add group to form
    formGroup.append(labelElelemt, inputElement);
    form.append(formGroup);
  });

  return form;
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
  buttonOverview, buttonSearch, buttonAddAlbum, buttonAddCD,
  buttonAddTrack, contentHolder, addFormTitle, addForm, addFormInput, addSubmitButton,
  addLegend, clearContent,
};
