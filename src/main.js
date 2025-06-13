import axios from 'axios';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.error({
  title: 'Error',
  message:
    'Sorry, there are no images matching your search query. Please try again!',
});
