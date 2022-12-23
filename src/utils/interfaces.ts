export interface AppInterface {
  searchQuery: string;
  page: number;
  images: [];
}

export interface ImageObject {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}
