const container = document.querySelector('.gallery');
const htmlMarkUp = images
  .map(image => {
    return `<li class="gallery-item">
      <a class="gallery-link" href="${image.original}">
        <img
          class="gallery-image"
          src="${image.preview}"
          alt="${image.description}"
        />
      </a>
      </li>`;
  })
  .join('');
container.innerHTML = htmlMarkUp;
// gallery.refresh();
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
