export interface AuthorEvent {
  title?: string;
  subtitle?: string;
  imgSrc?: string;
  date?: string | Date;
  time?: string;
  location?: {
    address?: string,
    coords?: any,
    googleMapLink?: string
  }
  text?: string;
  body?: string | HTMLElement;
}
