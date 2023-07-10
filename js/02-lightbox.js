import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.innerHTML = createGalleryMarkup(galleryItems);
gallery.addEventListener('click', onImgClick);

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


function onImgClick(e) {
    e.preventDefault();
    const activeImg = e.target;

    if (!activeImg.classList.contains('gallery__image')) {
        return;
    }
    showModal();
}

function showModal() {
    const activeImgModal = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    activeImgModal.open()
}