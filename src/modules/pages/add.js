import {
  contentHolder, addTitle, addForm, addFormInput, addSubmitButton, addLegend,
} from '../commonElements.js';

export default function buildAddPage() {

  // Set title of content
  contentHolder.append(addTitle('Add album, cd or track'));

  // Create form section
  contentHolder.append(addForm());

  // Add form input
  const formFields = [
    { label: 'Genre*', type: 'select', required: true },
    { label: 'Title*', type: 'input', required: true },
    { label: 'Artist*', type: 'input', required: true },
    { label: 'Collaborators', type: 'input', required: false },
    { label: 'Year', type: 'select', required: false },
    { label: 'Label', type: 'input', required: false },
    { label: 'Items', type: 'input', required: false },
    { label: 'Info', type: 'input', required: false },
    { label: 'Rating', type: 'select', required: false },
  ];

  formFields.forEach((field) => {
    contentHolder.append(addFormInput(field.label, field.type, field.required));
  });

  // Add legend
  contentHolder.append(addLegend('* Required'));

  // Add submit button
  contentHolder.append(addSubmitButton());

}

