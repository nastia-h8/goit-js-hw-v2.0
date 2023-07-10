import { galleryItems } from './gallery-items.js';
// Change code below this line


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
            data-source="${original}"
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

    showImgModal(activeImg);
}

/**
 * відкриття модалки з зображенням оригінального розміру
 * @param {Object} img 
 */
function showImgModal(img) {
    const path = img.dataset.source;
    const description = img.alt;

    const imgModal = basicLightbox.create(`<img src="${path}" alt="${description}">`,
        {
        onShow: () => document.addEventListener('keydown', onEscKeyPress),
        onClose: () => document.removeEventListener('keydown', onEscKeyPress),
        });

    imgModal.show();

    function onEscKeyPress(e) {
        if (e.code === 'Escape') {
        imgModal.close();
        }
    }
}

