import {
  contentHolder, addTitle, addForm, addFormInput, addSubmitButton, addLegend, clearContent,
} from '../commonElements.js';

export default function buildAddPage(type, method, ButtonTxt) {

  // Create closure
  return () => {
    const itemType = type;

    // List of elements and properties
    const formFieldsAlbum = [
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
    const formFieldsCD = [
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
        label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'Label name...',
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
    const formFieldsTrack = [
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

    // Reset content holder
    clearContent();

    // Create form
    const form = addForm(method);
    form.classList.add('form');

    // Set title of form
    form.append(addTitle(`${ButtonTxt} ${itemType}`));

    // Build input section with corresponding elements
    if (itemType === 'album') form.append(addFormInput(formFieldsAlbum));
    if (itemType === 'cd') form.append(addFormInput(formFieldsCD));
    if (itemType === 'track') form.append(addFormInput(formFieldsTrack));

    // Add legend to dorm
    form.append(addLegend('* Required'));

    // Add submit button to dorm
    form.append(addSubmitButton(ButtonTxt));

    // Put form in content section
    contentHolder.append(form);
  };
}
