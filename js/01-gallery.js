import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const imgCard = galleryItems.map(({ preview, description }, index) => `
    <li class="gallery__item">
        <img class = "gallery__image" src="${preview}" loading="lazy" alt = "${description}" id = "${index}">
    </li>
`).join('');

galleryRef. insertAdjacentHTML("beforeend", imgCard);
galleryRef.addEventListener('click', onImgClick); 

function onImgClick(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const id = event.target.getAttribute('id');
    const imgUrl = galleryItems[id].original;
    const instance = basicLightbox.create(`
	    <img src = "${imgUrl}" width = "800" height = "600">
    `);
    instance.show();
  
}

console.log(galleryItems);
