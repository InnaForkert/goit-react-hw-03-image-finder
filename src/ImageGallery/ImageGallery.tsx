import React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ImageObject } from "../utils/interfaces";
import css from "./ImageGallery.module.css";

export function ImageGallery({
  images,
  fetching,
  openModal,
}: {
  images: ImageObject[];
  fetching: boolean;
  openModal: React.MouseEventHandler<HTMLElement>;
}) {
  function handleOpenModal(e: React.MouseEvent<HTMLElement>) {
    openModal(e);
  }

  return (
    <ul className={css.ImageGallery} onClick={handleOpenModal}>
      {images.length
        ? images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              largeImg={largeImageURL}
              alt={tags}
            />
          ))
        : fetching
        ? null
        : "Start searching!"}
    </ul>
  );
}
