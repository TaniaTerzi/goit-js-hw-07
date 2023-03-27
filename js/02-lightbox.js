import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const takeEllement = document.querySelector('.gallery');
console.log(takeEllement);

let listGallery = '';
galleryItems.forEach((item) => {
    listGallery += 
    `       
    <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
 </li>
`
});

takeEllement.insertAdjacentHTML('afterbegin', listGallery);


takeEllement.addEventListener('click', (el) => {
    el.preventDefault()} );

    const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

