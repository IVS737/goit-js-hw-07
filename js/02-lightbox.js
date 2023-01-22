import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

const imagesHTML = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`,
  ""
);

galleryContainer.insertAdjacentHTML("beforeend", imagesHTML);

let simpleLightBoxInstance = new SimpleLightbox(".gallery a");

simpleLightBoxInstance.on("show.simplelightbox", function (evt) {});
