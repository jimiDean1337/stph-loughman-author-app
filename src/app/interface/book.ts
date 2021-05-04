export interface Book {
  title?: string;
  imgSrc?: string;
  publishedOn?: string | Date;
  publisher?: string;
  printLength?: number;
  labels?: string[];
  price?: string;
  purchaseLink?: string;
  swiperImages?: any[];
  reviews?: any[];
  text?: string;
  body?: string | HTMLElement | any;
  previewAvailable?: boolean;
  previewLink?: string;
  detailsLink?: string;
  genre?: 'Fiction' | 'Non-Fiction';
  filterType?: string;
}
