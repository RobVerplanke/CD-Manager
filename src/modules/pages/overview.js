import {
  contentHolder, clearContent, addForm, addTitle,
} from '../commonElements.js';

export default function buildOverviewPage() {

  // Reset content holder
  clearContent();

  // Create form
  // const form = addForm();

  // Set title of content
  contentHolder.append(addTitle('Overview'));

  // Put form in content holder
  // contentHolder.append(form);
}
