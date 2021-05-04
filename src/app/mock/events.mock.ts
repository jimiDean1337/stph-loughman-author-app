import { AuthorEvent } from '../interface/event';

export const EVENTS: AuthorEvent[] = [
  {
    title: 'The Best Fake Event Ever',
    subtitle: 'Author Speaking Event',
    imgSrc: 'https://www.literaryglobe.com/wp-content/uploads/2021/01/authorevents.jpg',
    date: '05/02/2021',
    time: '7 p.m.',
    location: {
      address: '1234 Main St. Newark, OH 43055',
      coords: '40.0581° N, 82.4013° W',
      googleMapLink: `https://www.google.com/maps/place/40%C2%B003'29.2%22N+82%C2%B024'04.7%22W/@40.0581041,-82.4034887,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d40.0581!4d-82.4013?hl=en`
    },
    text: `Come join me for an evening of book signing and a reading from my new book.`,
    body: null
  }
];
