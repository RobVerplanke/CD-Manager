import {
  contentHolder, addTitle, addForm, addFormInput, addSubmitButton, addLegend, clearContent,
} from '../commonElements.js';

export default function buildAddPage() {

  // Reset content holder
  clearContent();

  // Create form
  const form = addForm('post');

  // Set title of content
  form.append(addTitle('Add album, cd or track'));

  // Add labels and input fields
  const formFields = [
    {
      label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Name...',
    },
    {
      label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'Name of album/CD/track...',
    },
    {
      label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Genre...',
    },
    {
      label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',
    },
    {
      label: 'Year', type: 'select', id: 'year', required: false, placeHolder: '',
    },
    {
      label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'If present...',
    },
    {
      label: 'Items', type: 'input', id: 'items', required: false, placeHolder: 'Number of CDs/tracks...',
    },
    {
      label: 'Info', type: 'input', id: 'info', required: false, placeHolder: 'More info...',
    },
    {
      label: 'Rating', type: 'select', id: 'rating', required: false, placeHolder: '',
    },
  ];

  formFields.forEach((field) => {
    form.append(addFormInput(field.label, field.type, field.id, field.required, field.placeHolder));
  });

  // Add legend
  form.append(addLegend('* Required'));

  // Add submit button
  form.append(addSubmitButton());

  // Put form in content section
  contentHolder.append(form);
}

