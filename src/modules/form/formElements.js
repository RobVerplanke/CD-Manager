// All labels, elements and attribute values for each form

// Search form
const searchItemElements = [
  {
    label: 'Artist', type: 'input', id: 'artist', required: false, placeHolder: 'Artist 1...',
  },
  {
    label: 'Title', type: 'input', id: 'title', required: false, placeHolder: 'Album, cd or track...',
  },
  {
    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Electronic...',
  },
  {
    label: 'Style', type: 'input', id: 'style', required: false, placeHolder: 'Progressive trance...',
  },
  {
    label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',
  },
  {
    label: 'Release year', type: 'select', id: 'year', required: false,
  },
  {
    label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'Name...',
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
    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Electronic...',
  },
  {
    label: 'Style', type: 'input', id: 'style', required: false, placeHolder: 'Progressive trance...',
  },
  {
    label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',
  },
  {
    label: 'Release year', type: 'select', id: 'year', required: false,
  },
  {
    label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'Name...',
  },
  {
    label: 'CDs', type: 'select', id: 'cds', required: false,
  },
  {
    label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',
  },
  {
    label: 'Rating', type: 'select', id: 'rating', required: false,
  },
  {
    label: 'Image', type: 'input', id: 'img', required: false, placeHolder: 'Select image',
  },
];

// Add CD form
const addCDElements = [
  {
    label: 'Album', type: 'select', id: 'album',
  },
  {
    label: 'Disc nr.', type: 'input', id: 'disc', required: false, placeHolder: '1',
  },
  {
    label: 'Artist*', type: 'input', id: 'artist', required: true, placeHolder: 'Artist name...',
  },
  {
    label: 'Title*', type: 'input', id: 'title', required: true, placeHolder: 'CD title...',
  },
  {
    label: 'Genre', type: 'input', id: 'genre', required: false, placeHolder: 'Electronic...',
  },
  {
    label: 'Style', type: 'input', id: 'style', required: false, placeHolder: 'Progressive trance...',
  },
  {
    label: 'Collaborators', type: 'input', id: 'collabs', required: false, placeHolder: 'Artist 1, artist 2...',
  },
  {
    label: 'Release year', type: 'select', id: 'year', required: false,
  },
  {
    label: 'Label', type: 'input', id: 'label', required: false, placeHolder: 'Name...',
  },
  {
    label: 'Tracks', type: 'input', id: 'tracks', required: false, placeHolder: '14',
  },
  {
    label: 'Info', type: 'textarea', id: 'info', required: false, placeHolder: 'More info...',
  },
  {
    label: 'Rating', type: 'select', id: 'rating', required: false,
  },
  {
    label: 'Image', type: 'input', id: 'img', required: false, placeHolder: 'Select image',
  },
];

// Add track form
const addTrackElements = [
  {
    label: 'Select CD*', type: 'select', id: 'cds', required: true,
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
    label: 'Remix', type: 'input', id: 'remix', required: false, placeHolder: 'Artist...',
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
