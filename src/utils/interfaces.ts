export interface AppInterface {
  searchQuery: string;
  page: number;
  images: [] | ImageObject[];
  fetching: boolean;
  showModal: boolean;
  currentModalImg: string;
  showLoadMoreBtn: boolean;
}

export interface ImageObject {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}
