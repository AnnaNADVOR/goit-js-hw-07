import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const imgCard = galleryItems.map(({ preview, original, description }) => `
    <li class="gallery__item">
        <a class = "gallery__link" href = "${original}">
            <img class = "gallery__image" src="${preview}" data-source = "${original}" alt = "${description}">
        </a>
    </li>
`).join('');

galleryRef. insertAdjacentHTML("beforeend", imgCard);
galleryRef.addEventListener('click', onImgClick); 

function onImgClick(event) {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return;
    }
  
    const imgSrc = event.target.getAttribute('data-source');
    const instance = basicLightbox.create(`
	    <img src = "${imgSrc}" width = "800" height = "600">
    `);
    instance.show();

    document.addEventListener("keydown", onCloseModal);
    
    function onCloseModal (event) {
        if (event.code === 'Escape') {
            instance.close();
            document.removeEventListener("keydown", onCloseModal);
        }
};
}

console.log(galleryItems);
