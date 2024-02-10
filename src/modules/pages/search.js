import {
  contentHolder, addTitle, addForm, addFormInput, addSubmitButton, clearContent,
} from '../commonElements.js';

export function buildSearchAlbumPage() {

  // Reset content holder
  clearContent();

  // Create form
  const form = addForm('get');

  // Set title of content
  form.append(addTitle('Search album'));

  // Add labels and input fields
  const formFields = [
    {
      label: 'Artist', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',
    },
    {
      label: 'Title', type: 'input', id: 'title', required: true, placeHolder: 'Album title...',
    },
  ];

  formFields.forEach((field) => {
    form.append(addFormInput(field.label, field.type, field.id, field.required, field.placeHolder));
  });

  // Add submit button
  form.append(addSubmitButton('Search'));

  // Put form in content section
  contentHolder.append(form);
}

export function buildSearchCDPage() {

  // Reset content holder
  clearContent();

  // Create form
  const form = addForm('get');

  // Set title of content
  form.append(addTitle('Search CD'));

  // Add labels and input fields
  const formFields = [
    {
      label: 'Artist', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',
    },
    {
      label: 'Title', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',
    },
  ];

  formFields.forEach((field) => {
    form.append(addFormInput(field.label, field.type, field.id, field.required, field.placeHolder));
  });

  // Add submit button
  form.append(addSubmitButton('Search'));

  // Put form in content section
  contentHolder.append(form);
}

export function buildSearchTrackPage() {

  // Reset content holder
  clearContent();

  // Create form
  const form = addForm('get');

  // Set title of content
  form.append(addTitle('Search track'));

  // Add labels and input fields
  const formFields = [
    {
      label: 'Artist', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',
    },
    {
      label: 'Title', type: 'input', id: 'title', required: true, placeHolder: 'Track title...',
    },
  ];

  formFields.forEach((field) => {
    form.append(addFormInput(field.label, field.type, field.id, field.required, field.placeHolder));
  });

  // Add submit button
  form.append(addSubmitButton('Search'));

  // Put form in content section
  contentHolder.append(form);
}
