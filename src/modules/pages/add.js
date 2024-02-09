import {
  contentHolder, addTitle, addForm, addFormInput, addSubmitButton, addLegend, addFormInputSelect,
} from '../commonElements.js';

export default function buildAddPage() {

  // Create form
  const form = addForm();

  // Set title of content
  form.append(addTitle('Add album, cd or track'));


  // Add labels and input fields
  const formFields = [
    {
      label: 'Type*', type: 'select', id: 'type', required: true,
    },
    {
      label: 'Artist*', type: 'input', id: 'artist', required: true,
    },
    {
      label: 'Title*', type: 'input', id: 'title', required: true,
    },
    {
      label: 'Genre', type: 'input', id: 'genre', required: false,
    },
    {
      label: 'Collaborators', type: 'input', id: 'collabs', required: false,
    },
    {
      label: 'Year', type: 'select', id: 'year', required: false,
    },
    {
      label: 'Label', type: 'input', id: 'label', required: false,
    },
    {
      label: 'Items', type: 'input', id: 'items', required: false,
    },
    {
      label: 'Info', type: 'input', id: 'info', required: false,
    },
    {
      label: 'Rating', type: 'select', id: 'rating', required: false,
    },
  ];

  formFields.forEach((field) => {
    if (field.type === 'select') {
      form.append(addFormInputSelect(field.label, field.id, field.required));
    } else {
      form.append(addFormInput(field.label, field.type, field.id, field.required));
    }
  });

  // Add legend
  form.append(addLegend('* Required'));

  // Add submit button
  form.append(addSubmitButton());

  // Put form to content section
  contentHolder.append(form);
}

