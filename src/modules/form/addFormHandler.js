import { addToJson } from '../utils/api.js';

export default function addAlbum() {
  const albumTitle = document.querySelector('#title').value;
  const albumArtist = document.querySelector('#artist').value;
  const albumGenre = document.querySelector('#genre').value;
  const albumStyle = document.querySelector('#style').value;
  const albumCollabs = document.querySelector('#collabs').value;
  const albumYear = document.querySelector('#year').value;
  const albumLabel = document.querySelector('#label').value;
  const albumCds = document.querySelector('#cds').value;
  const albumInfo = document.querySelector('#info').value;
  const albumRating = document.querySelector('#rating').value;
  const albumImg = document.querySelector('#img').value;

  // id: generate id

  // added: add current date

  const newAlbum = {
    id: 'id',
    title: albumTitle,
    artist: albumArtist,
    year: albumYear,
    collabs: albumCollabs,
    label: albumLabel,
    genre: albumGenre,
    style: albumStyle,
    cds: albumCds,
    added: 'date',
    rating: albumRating,
    info: albumInfo,
    img: albumImg,
  };

  addToJson(newAlbum, 'album');

  console.log('submitted!');
}

// export function setAddSubmitListener(button) {
//   const submitButton = button;

//   submitButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     addAlbum();
//   });
// }
