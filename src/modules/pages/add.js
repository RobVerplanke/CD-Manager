import {
  contentHolder, addTitle, addForm, addFormInput, addSubmitButton, addLegend, clearContent,
} from '../commonElements.js';

export function buildAddAlbumPage() {

  // Reset content holder
  clearContent();

  // Create form
  const form = addForm('post');

  // Set title of content
  form.append(addTitle('Add album'));

  // Add labels and input fields
  const formFields = [
    {
      label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',
    },
    {
      label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'Album title...',
    },
    {
      label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of genre...',
    },
    {
      label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',
    },
    {
      label: 'Year', type: 'select', id: 'year', required: false,
    },
    {
      label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'Label name...',
    },
    {
      label: 'CDs', type: 'select', id: 'items', required: false,
    },
    {
      label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',
    },
    {
      label: 'Rating', type: 'select', id: 'rating', required: false,
    },
  ];

  formFields.forEach((field) => {
    form.append(addFormInput(field.label, field.type, field.id, field.required, field.placeHolder));
  });

  // Add legend
  form.append(addLegend('* Required'));

  // Add submit button
  form.append(addSubmitButton('Add'));

  // Put form in content section
  contentHolder.append(form);
}

export function buildAddCDPage() {

  // Reset content holder
  clearContent();

  // Create form
  const form = addForm('post');

  // Set title of content
  form.append(addTitle('Add CD'));

  // Add labels and input fields
  const formFields = [
    {
      label: 'Album', type: 'select', id: 'album',
    },
    {
      label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',
    },
    {
      label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',
    },
    {
      label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of genre...',
    },
    {
      label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',
    },
    {
      label: 'Year', type: 'select', id: 'year', required: false,
    },
    {
      label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'If present...',
    },
    {
      label: 'Tracks', type: 'input', id: 'items', required: false, placeHolder: 'Number of tracks...',
    },
    {
      label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',
    },
    {
      label: 'Rating', type: 'select', id: 'rating', required: false,
    },
  ];

  formFields.forEach((field) => {
    form.append(addFormInput(field.label, field.type, field.id, field.required, field.placeHolder));
  });

  // Add legend
  form.append(addLegend('* Required'));

  // Add submit button
  form.append(addSubmitButton('Add'));

  // Put form in content section
  contentHolder.append(form);
}

export function buildAddTrackPage() {

  // Reset content holder
  clearContent();

  // Create form
  const form = addForm('post');

  // Set title of content
  form.append(addTitle('Add Track'));

  // Add labels and input fields
  const formFields = [
    {
      label: 'Select CD*', type: 'select', id: 'album', required: true,
    },
    {
      label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',
    },
    {
      label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',
    },
    {
      label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of genre...',
    },
    {
      label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',
    },
    {
      label: 'Length', type: 'input', id: 'length', required: false, placeHolder: 'Length of track...',
    },
    {
      label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',
    },
    {
      label: 'Rating', type: 'select', id: 'rating', required: false,
    },
  ];

  formFields.forEach((field) => {
    form.append(addFormInput(field.label, field.type, field.id, field.required, field.placeHolder));
  });

  // Add legend
  form.append(addLegend('* Required'));

  // Add submit button
  form.append(addSubmitButton('Add'));

  // Put form in content section
  contentHolder.append(form);
}
