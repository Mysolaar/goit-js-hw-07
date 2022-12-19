import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


//// =----------------
const galleryImages = document.querySelector("div.gallery");

const creategalleryImages = galleryItems
  .map((galleryItem) => `<div class="gallery__image" data-source="${galleryItem.original}" alt="${galleryItem.description}"><img src="${galleryItem.preview}"></div>`)
  .join("");

galleryImages.insertAdjacentHTML("beforeend", creategalleryImages);

const galleryElement = document.querySelector(".gallery");

galleryElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("gallery__image")) {
    event.preventDefault();

    const imageSource = event.target.getAttribute("data-source");
    const imageDescription = event.target.getAttribute("alt");

    const modalInstance = basicLightbox.create(`
   <img src="${imageSource}" alt="${imageDescription}">
`);
    modalInstance.show();
  }
});

document.addEventListener("keydown", (event) => {
   if (event.key === "Escape") {
     modalInstance.close();
   }
 });
/// --------------

