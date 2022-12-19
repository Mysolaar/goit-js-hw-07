import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryImages = document.querySelector("div.gallery");

const galleryElement = document.querySelector(".gallery");

let html = "";
galleryItems.forEach((item) => {
  html += `
    <div class="gallery__item">
      <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}">
      </a>
    </div>
  `;
});
galleryElement.insertAdjacentHTML("beforeend", html);

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