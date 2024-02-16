import {
  formHolder, addFormTitle, addForm, addFormInput, addSubmitButton, addLegend,
} from '../commonFormElements.js';
import {
  addAlbumElements, addCDElements, addTrackElements, searchItemElements,
} from '../form/formElements.js';
import { clearContent } from '../utils/utils.js';

export default function buildFormPage(method, action, type) {

  // Create closure
  return () => {
    const itemType = type;
    const submitMethod = method;
    const formAction = action;

    // Clear content holder
    clearContent('#main');

    // Create form
    const form = addForm(submitMethod);
    form.classList.add('form');

    // Set and add form title
    form.append(addFormTitle(`${formAction} ${itemType}`));

    // Build related elements and add to form
    if (formAction === 'Search') form.append(addFormInput(searchItemElements));

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
    formHolder.append(form);
  };
}
