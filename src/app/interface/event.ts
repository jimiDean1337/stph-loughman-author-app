export interface AuthorEvent {
  title?: string;
  subtitle?: string;
  imgSrc?: string;
  date?: string | Date;
  time?: string;
  hasEnded?: boolean;
  location?: {
    address?: string,
    coords?: any,
    googleMapLink?: string
  }
  text?: string;
  body?: string | HTMLElement;
}
