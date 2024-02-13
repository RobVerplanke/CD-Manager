import {
  contentHolder, addTitle, addForm, addFormInput, addSubmitButton, addLegend, clearContent,
} from '../commonElements.js';
import {
  addAlbumElements, addCDElements, addTrackElements, searchItemElements, editItemElements,
} from '../form/formElements.js';

export default function buildFormPage(type, method, action) {

  // Create closure
  return () => {
    const itemType = type;
    const submitMethod = method;
    const formAction = action;

    // Clear content holder
    clearContent();

    // Create form
    const form = addForm(submitMethod);
    form.classList.add('form');

    // Set and add form title
    form.append(addTitle(`${formAction} ${itemType}`));

    // Build related elements and add to form
    if (formAction === 'Search') form.append(addFormInput(searchItemElements));
    if (formAction === 'Edit') form.append(addFormInput(editItemElements));

    if (formAction === 'Add' && itemType === 'album') {
      form.append(addFormInput(addAlbumElements));
      form.append(addLegend('* Required'));
    }
    if (formAction === 'Add' && itemType === 'cd') {
      form.append(addFormInput(addCDElements));
      form.append(addLegend('* Required'));
    }
    if (formAction === 'Add' && itemType === 'track') {
      form.append(addFormInput(addTrackElements));
      form.append(addLegend('* Required'));
    }

    // Add submit button to form
    form.append(addSubmitButton(formAction));

    // Put form in content section
    contentHolder.append(form);
  };
}
