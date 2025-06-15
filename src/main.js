import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('#loader');
const lightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = event.target.elements[0].value.trim();
  if (!query) return;

  const params = new URLSearchParams({
    key: '50818565-86d44cf91814c3f45e3f7ee49',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  hideLoader();

  axios(`https://pixabay.com/api/?${params}`)
    .then(response => {
      const hits = response.data.hits;
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: `topRight`,
        });
        gallery.innerHTML = '';
        return;
      }
      gallery.innerHTML = createMarkup(hits);
      lightbox.refresh();
    })
    .catch(error => {
      console.error('Error:', error);
      gallery.innerHTML = '<p>Error loading images</p>';
    })
    .finally(() => {
      showLoader();
    });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="card">
        <p><span>👍 Likes</span>${likes}</p>
        <p><span>👁 Views</span>${views}</p>
        <p><span>💬 Comments</span>${comments}</p>
        <p><span>⬇ Downloads</span>${downloads}</p>
      </div>
    </li>
  `
    )
    .join('');
}

function hideLoader() {
  loader.classList.remove('hidden');
}
function showLoader() {
  loader.classList.add('hidden');
}
