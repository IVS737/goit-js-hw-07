import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

const imagesHTML = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></div>`,
  ""
);

galleryContainer.insertAdjacentHTML("beforeend", imagesHTML);

let basicLightboxInstance = null;

const modals = (evt) => {
  evt.preventDefault();

  if (evt.target.nodeName === "IMG") {
    basicLightboxInstance = basicLightbox.create(
      `<img src="${evt.target.dataset.source}" width="300">`
    );

    basicLightboxInstance.show();
  }
};

const handleEscKeyPress = (evt) => {
  if (evt.key === "Escape" && basicLightboxInstance?.visible())
    basicLightboxInstance.close(() =>
      console.log("Basic lightbox closed successfully")
    );
};

galleryContainer.addEventListener("click", modals);
document.addEventListener("keydown", handleEscKeyPress);
