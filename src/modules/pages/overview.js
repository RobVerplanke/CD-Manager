import {
  contentHolder, clearContent, addTitle,
} from '../commonElements.js';

import fetchData from '../utils/api.js';

export default async function buildOverviewPage() {

  // Reset content holder
  clearContent();

  // Set title of content
  contentHolder.append(addTitle('Overview'));

  try {

    // Get data
    const data = await fetchData();

  } catch (error) {
    console.error('Fout bij opbouwen van overzichtspagina:', error);
  }
}
