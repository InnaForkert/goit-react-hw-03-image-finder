export function ImageGalleryItem(props: {
  src: string;
  largeImg: string;
  alt: string;
}) {
  return (
    <li className="gallery-item">
      <img src={props.src} alt={props.alt} />
    </li>
  );
}
