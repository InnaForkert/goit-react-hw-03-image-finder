import { ImageGalleryItem } from "../ImageGalleryItem/ImageGallery";
import { ImageObject } from "../utils/interfaces";

export function ImageGallery({ images }: { images: ImageObject[] }) {
  return (
    <ul>
      {images.length &&
        images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            data-largeImg={largeImageURL}
          />
        ))}
    </ul>
  );
}
