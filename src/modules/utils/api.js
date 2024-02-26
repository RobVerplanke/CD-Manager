import data from '../../../dist/data/data.json';

function addToJson(newData, itemType) {
  // Lees eerst de bestaande data
  fetch(data)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      response.json();
    })
    .then((existingData) => {
      const updatedData = existingData;

      if (itemType === 'album') {
        updatedData.data.albums.push(newData);
      }

      // Zet het object om naar JSON-formaat
      const updatedJsonData = JSON.stringify(updatedData);

      // Schrijf de geüpdatete data terug naar het JSON-bestand
      return fetch(data, {
        method: 'PUT', // Of 'POST', afhankelijk van jouw behoeften
        headers: {
          'Content-Type': 'application/json',
        },
        body: updatedJsonData,
      });
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Fout bij het schrijven naar het JSON-bestand');
      }
      console.log('Data succesvol bijgewerkt');
    })
    .catch((error) => console.error(error));
}

export { data, addToJson };
