import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
gallery.innerHTML = createGalleryMarkup(galleryItems);

const activeImgModal = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });


/**
 * створює початкову розмітку галереї
 * @param {Array} arr 
 * @returns String
 */
function createGalleryMarkup(arr) {
    return arr.map(({ description, original, preview }) =>
    `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>
    `
).join('');
}
