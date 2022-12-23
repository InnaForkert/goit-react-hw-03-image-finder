export interface AppInterface {
  searchQuery: string;
  page: number;
  images: [] | ImageObject[];
}

export interface ImageObject {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}
