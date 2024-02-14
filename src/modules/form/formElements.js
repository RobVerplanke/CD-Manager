// All labels, elements and attribute values for each form

// Search form
const searchItemElements = [
  {
    label: 'Artist', type: 'input', id: 'artist', required: false, placeHolder: 'Artist name...',
  },
  {
    label: 'Title', type: 'input', id: 'title', required: false, placeHolder: 'Album, cd or track title...',
  },
  {
    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of music...',
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
    label: 'Rating', type: 'select', id: 'rating', required: false,
  },
];

// Add album form
const addAlbumElements = [
  {
    label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',
  },
  {
    label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'Album title...',
  },
  {
    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of music...',
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

// Add CD form
const addCDElements = [
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
    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of music...',
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
    label: 'Tracks', type: 'input', id: 'tracks', required: false, placeHolder: 'Number of tracks...',
  },
  {
    label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',
  },
  {
    label: 'Rating', type: 'select', id: 'rating', required: false,
  },
];

// Add track form
const addTrackElements = [
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
    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Type of music...',
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

export {
  searchItemElements, addAlbumElements, addCDElements, addTrackElements,
};
