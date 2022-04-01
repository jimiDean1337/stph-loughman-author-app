export interface AuthorEvent {
  [key: string]: any;
  title?: string;
  subtitle?: string;
  imgSrc?: string;
  date?: string | Date;
  time?: string;
  hasEnded?: boolean;
  location?: {
    link?: string,
    address?: string,
    coords?: any,
    googleMapLink?: string
  }
  text?: string;
  body?: string | HTMLElement;
}
