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
  openModal: (e: MouseEvent) => void;
}) {
  function handleOpenModal(e: MouseEvent) {
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
