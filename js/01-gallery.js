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
        <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </li>   
`
});

takeEllement.insertAdjacentHTML('afterbegin', listGallery);

///////////
takeEllement.addEventListener('click', (el) => {
    el.preventDefault()} 
    );

takeEllement.addEventListener('click', (event) => {
    const instance = basicLightbox.create(
    `<img class="gallery__image" src="${event.target.dataset.source}">`
    );
        instance.show(); 
    });
   



