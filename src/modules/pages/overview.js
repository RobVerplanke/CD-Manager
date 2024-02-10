import {
  contentHolder, clearContent, addTitle,
} from '../commonElements.js';

export default function buildOverviewPage() {

  // Reset content holder
  clearContent();


  // Set title of content
  contentHolder.append(addTitle('Overview'));

}
