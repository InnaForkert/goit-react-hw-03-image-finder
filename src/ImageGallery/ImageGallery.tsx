import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ImageObject } from "../utils/interfaces";

export function ImageGallery({ images }: { images: ImageObject[] }) {
  return (
    <ul>
      {images.length &&
        images.map(({ id, webformatURL, largeImageURL, tags }) => (
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
