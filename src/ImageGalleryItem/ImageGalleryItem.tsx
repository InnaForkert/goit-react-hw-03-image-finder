import css from "./ImageGalleryItem.module.css";

export function ImageGalleryItem(props: {
  src: string;
  largeImg: string;
  alt: string;
}) {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={props.src}
        alt={props.alt}
        className={css["ImageGalleryItem-image"]}
        data-largeimg={props.largeImg}
      />
    </li>
  );
}
