import {
  formHolder, addFormTitle, addForm, addFormInput, addSubmitButton, addLegend,
} from '../commonFormElements.js';
import {
  addAlbumElements, addCDElements, addTrackElements, searchItemElements,
} from '../form/formElements.js';
// import { setAddSubmitListener } from '../form/addFormHandler.js';
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

    // Create submit button, set even tlistener and add it to form
    const submitBtn = addSubmitButton(formAction);
    // setAddSubmitListener(submitBtn);
    submitBtn.classList.add('submit-button');
    form.append(submitBtn);

    // Put form in content section
    formHolder.append(form);
  };
}
