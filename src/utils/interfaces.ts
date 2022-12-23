export interface AppInterface {
  searchQuery: string;
  page: number;
  images: [] | ImageObject[];
  fetching: boolean;
}

export interface ImageObject {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}
