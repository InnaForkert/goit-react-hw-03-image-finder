import React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ImageObject } from "../utils/interfaces";
import css from "./ImageGallery.module.css";

export function ImageGallery({
  images,
  openModal,
}: {
  images: ImageObject[];
  openModal: React.MouseEventHandler<HTMLElement>;
}) {
  function handleOpenModal(e: React.MouseEvent<HTMLElement>) {
    openModal(e);
  }

  return (
    <ul className={css.ImageGallery} onClick={handleOpenModal}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          largeImg={largeImageURL}
          alt={tags}
        />
      ))}
    </ul>
  );
}
